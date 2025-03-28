import http from './http';

export default {
  /**
   * @method postApi()
   * @desc postApi is common method for post API
   * @param endpointUrl :string - end point url of api calling.
   * @param requestPayload :Object - request payload for api calling.
   */
  postApi(endpointUrl, requestPayload) {
    return http.post(endpointUrl, requestPayload);
  },
  /**
   * @method getApi()
   * @desc getApi is common method for get API
   * @param endpointUrl :string - end point url of api calling.
   * @param requestPayload :Object - request payload for api calling.
   */
  getApi(endpointUrl, requestPayload) {
    return http.get(endpointUrl, { params: requestPayload });
  },

  /**
   * @method putApi()
   * @desc putApi is common method for put API
   * @param endpointUrl :string - end point url of api calling.
   * @param requestPayload :Object - request payload for api calling.
   */
  putApi(endpointUrl, requestPayload) {
    return http.put(endpointUrl, requestPayload);
  },
  /**
   * @method deleteApi()
   * @desc deleteApi is common method for delete API
   * @param endpointUrl :string - end point url of api calling.
   */
  deleteApi(endpointUrl) {
    return http.delete(endpointUrl);
  },

  patchApi(endpointUrl, requestPayload) {
    return http.patch(endpointUrl, requestPayload);
  },

  uploadFile(endpointUrl, requestPayload) {
    return http.post(endpointUrl, requestPayload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};
