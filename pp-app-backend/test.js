var axios = require("axios").default;

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

var options = {
  method: 'GET',
  url: 'https://pp-app.com/api/public',
  headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmSDFjTlhQaVJiVU5GWDVWbXhTVSJ9.eyJpc3MiOiJodHRwczovL2Rldi1rcDU4OTNuYi51cy5hdXRoMC5jb20vIiwic3ViIjoiV0Nxd2s5RjlNQ3BCUWRrNVBVWVc0ejRzb1dMQ0tNWjBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcHAtYXBwLmNvbSIsImlhdCI6MTY2MTgxMDEwOCwiZXhwIjoxNjYxODk2NTA4LCJhenAiOiJXQ3F3azlGOU1DcEJRZGs1UFVZVzR6NHNvV0xDS01aMCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.p3ZuXUgVUlsTJZ8GOIPvwipJ_vGsxwTABzLlohNH1UR2BaVTcCH06nEBE859w5b4W7UGrcJZD_4FPAKehqARseHKWtxes2_2NyMTDmythEhrbNZhjK7bzQyJAlavjxpHdLd7PSj7jXkZfpfeNcaJHfRxVQpVSau7ipRGCC_qTsOh0ECt3C_6r85vNRdJgblsUDlwaO79CB-BOfMHzBiiDctBlny6QgPqNCIJjqFShE_7rJ_Wp75od9CiU3H8MsZY55Dqmc1HVqUGXeBePwh-yEbYflQFCVV_fypJ5-iqnCHE2D_XZEDZdN2MUueJBO6fqx7Ls6f4oT9cNrP2vUeTtw'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
  console.log(":(")
});