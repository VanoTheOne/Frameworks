const { test, expect } = require('@playwright/test');
const { sendHttpRequest, postHttpRequest } = require('../helpers/sendHTTPrequest');
const { toBeValidSchema, toBeValidStatusCode } = require('../helpers/validator');
const songSchema = require('../data/songSchema.json');
const annotationSchema = require('../data/annotationSchema.json');
expect.extend({ toBeValidSchema, toBeValidStatusCode });

test.describe('Genius API tests', function () {
  let accessToken;

  test.beforeAll('Authentication genius', async ({ request }) => {
    const authConfig = {
      url: 'https://api.genius.com/oauth/token',
      data: {
        client_id: 'TPq15ny6Gv2CEBmzrHVamGs7RIqj7yalWzYPF8ynPcIOnyEIBjxq1y5ble39q9gn',
        client_secret: 'LIAjAqdT4JoV7LvDJGBMsNbmDMtiD2C0_hHBTU9tNyMJb3Qzf6rebPAaxSjblzTr7uR9JI5Iz9Wisf8tyhGz8Q',
        grant_type: 'client_credentials',
      },
    };
    const authResponse = await postHttpRequest(authConfig);
    accessToken = authResponse.data.access_token;
  });

  test(`Authentication should return status code 200`, async () => {
    expect(await accessToken).toBeTruthy();
  });

  test.describe(`Valid cases`, function () {
    let response;

    test(`Should find song by id and return status code 200`, async () => {
      const songID = 10000;
      const config = {
        url: `https://api.genius.com/songs/${songID}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      response = await sendHttpRequest(config);
  
      expect(await response).toBeValidStatusCode(200);
      expect(await response).toBeValidSchema(songSchema);
    });

    test(`Should find song annotation by id and return status code 200`, async () => {
      const annotationID = 2688316;
      const config = {
        url: `https://api.genius.com/annotations/${annotationID}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      response = await sendHttpRequest(config);
  
      expect(await response).toBeValidStatusCode(200);
      expect(await response).toBeValidSchema(annotationSchema);
    });
  });

  test.describe(`Negative cases`, function () {
    let response;

    test(`Should not find song by id and return status code 404`, async () => {
      const songID = 100000000;
      const config = {
        url: `https://api.genius.com/songs/${songID}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      response = await sendHttpRequest(config);

      expect(await response).toBeValidStatusCode(404);
      expect(await response).toBeValidSchema(songSchema);
    });
  });
});
