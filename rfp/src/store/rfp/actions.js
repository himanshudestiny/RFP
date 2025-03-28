import http from '@/app/services/httpServices';
import URL_UTILITY from '../../app/utility/url.utility';

const getItemCodeData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + '/item-code', payload);
};

const getUserDepartmentData = (context, payload) => {
  return http.getApi(URL_UTILITY.getConcatSegmentUrl, payload);
};

const postRfpHeaderData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + '/rfp-hdr-dtl', payload);
};

const getRfpHeaderData = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-hdr-dtl/${payload.headerId}`
  );
};

const postRfpItemData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + '/rfp-item-dtl', payload);
};

const getRfpItemData = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-item-dtl/${payload.headerId}`
  );
};

const postRfpItemAttributeData = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + '/rfp-item-attribute-dtl',
    payload
  );
};

const getRfpItemAttributeData = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-item-attribute-dtl/${payload.rfpItemId}`
  );
};

const postVendorData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-dtl`, payload);
};

const getVendorData = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-dtl/${payload.headerId}`
  );
};

const postNegotiationDetails = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-negotiation-dtl`,
    payload
  );
};

const getNegotiationDetails = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl +
      `/rfp-negotiation-dtl/${payload.negotiation_header_id}`
  );
};

const getRfpGridData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-entry`, payload);
};

const postLocationDetails = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-location-dtl`,
    payload
  );
};

const getLocationDetails = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-location-dtl/${payload.headerId}`
  );
};

const getRfpDataByHeaderId = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-entry/${payload.headerId}`
  );
};

const getNegotiationRoundData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-bid`, payload);
};

const postComparative = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-comparative`, payload);
};

const getComparative = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-comparative/${payload.comparative_id}`
  );
};

const getStatus = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-status-update`,
    payload
  );
};

const postBoqDetails = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-dtl`, payload);
};

const getBoqDetails = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-dtl/${payload.header_id}`
  );
};

const postBoqAttributeDetails = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-attribute-dtl`,
    payload
  );
};

const getBoqAttributeDetails = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-attribute-dtl/${payload.boq_id}`
  );
};

const getVersions = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-version`, payload);
};

const closeRfp = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-close`, payload);
};

const postGenerateComparative = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-initiate-comparative`,
    payload
  );
};

const getGenerateComparative = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl +
      `/rfp-initiate-comparative/${payload.comparative_id}`
  );
};

const postBoqGenerateComparative = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-comparative`,
    payload
  );
};

const extendRfp = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-extension`, payload);
};

const getExtendedRfpEndDate = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-extension/${payload.rfp_ext_id}`
  );
};

const postGenerateComparativeBoq = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-initiate-comparative`,
    payload
  );
};

const postTermsAndConditions = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-terms-and-condition`,
    payload
  );
};

const getTermsAndConditions = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-terms-and-condition/${payload.terms_id}`
  );
};

const getRfpStates = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-state`, payload);
};

const postCopyAttributes = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-copy-atr`, payload);
};
const addUploadRfpExcelList = (context, payload) => {
  const url = URL_UTILITY.postTempDataUrl;
  return http.postApi(
    url +
      '?excel_import_hdr_id=' +
      payload.excel_import_hdr_id +
      '&menu_id=' +
      payload.menu_id +
      '&sub_menu_id=' +
      payload.sub_menu_id
  );
};
const postBoqCopyAttributes = (context, payload) => {
  return http.postApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-copy-atr-boq`,
    payload
  );
};
const getRfpNewComparative = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-new-comparative`,
    payload
  );
};
const getKeySummaryDtls = (context, payload) => {
  return http.getApi(URL_UTILITY.getSummaryKeyDtlsUrl, payload);
};
const getRfpNewBoqComparative = (context, payload) => {
  return http.getApi(
    URL_UTILITY.getRfpAdminUrl + `/rfp-boq-new-comparative`,
    payload
  );
};
const getCostCentreData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-cost-centre`, payload);
};
const postCopyRfpData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-copy`, payload);
};

const postRfpNfaData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-nfa-payload`, payload);
};

const getRfpReqId = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-pdf-requestId?request_name=${payload.template_name}`);
};

const cancelRfp = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-cancel`, payload);
};

const deleteExcelUploadBoq = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-data-delete`, payload);
};

const getBoqGenerateComparative = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-new-json-comparative`, payload);
};

const getGrandSummaryComparative = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-summary-comparative-sheetwise`, payload);
};

const getActivityCodeSummaryComparative = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-summary-comparative`, payload);
};

const getBuyersData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-buyers`, payload);
};

const postOwnersData = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-owner-dtl`, payload);
};

const getOwnersData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-owner-dtl/${payload.rfp_header_id}`, payload);
};

const getWriteAcces = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-write-access`, payload);
};

const getQuestionsFromVendors = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-conversation-dtl`, payload);
};

const postQuestionsFromVendors = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-buyer-response-dtl`, payload);
};
const getAwardSummaryData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-award`, payload);
};
const alotAwardDetail = (context, payload) => {
  return http.postApi(URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-award-dtl`, payload);
};
const getAwardSummaryDtlById = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-award-dtl/${payload.rfp_header_id}`);
};
const getGenerateComparativeData = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-vendor-award-summary-sheetwise`, payload);
};
const getBoqLineCode = (context, payload) => {
  return http.getApi(URL_UTILITY.getRfpAdminUrl + `/rfp-boq-line-code`, payload);
};
export default {
  getItemCodeData,
  getUserDepartmentData,
  postRfpHeaderData,
  postRfpItemData,
  postRfpItemAttributeData,
  getRfpHeaderData,
  getRfpItemData,
  getRfpItemAttributeData,
  postVendorData,
  getVendorData,
  postNegotiationDetails,
  getNegotiationDetails,
  getRfpGridData,
  postLocationDetails,
  getLocationDetails,
  getRfpDataByHeaderId,
  getNegotiationRoundData,
  postComparative,
  getComparative,
  getStatus,
  postBoqDetails,
  getBoqDetails,
  postBoqAttributeDetails,
  getBoqAttributeDetails,
  getVersions,
  closeRfp,
  postGenerateComparative,
  getGenerateComparative,
  postBoqGenerateComparative,
  extendRfp,
  postGenerateComparativeBoq,
  getExtendedRfpEndDate,
  postTermsAndConditions,
  getTermsAndConditions,
  getRfpStates,
  postCopyAttributes,
  addUploadRfpExcelList,
  postBoqCopyAttributes,
  getRfpNewComparative,
  getKeySummaryDtls,
  getRfpNewBoqComparative,
  getCostCentreData,
  postCopyRfpData,
  postRfpNfaData,
  getRfpReqId,
  cancelRfp,
  deleteExcelUploadBoq,
  getBoqGenerateComparative,
  getGrandSummaryComparative,
  getActivityCodeSummaryComparative,
  getBuyersData,
  postOwnersData,
  getOwnersData,
  getWriteAcces,
  getQuestionsFromVendors,
  postQuestionsFromVendors,
  getAwardSummaryData,
  alotAwardDetail,
  getAwardSummaryDtlById,
  getGenerateComparativeData,
  getBoqLineCode
};
