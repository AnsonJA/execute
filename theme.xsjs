/** Get the Fiori custom theme details **/

//Local variable declarations
var oSQlcon;
var oThemeid;
var oResultSet;
var oSelectQuery;

try {

//Get input variables
oThemeid = $.request.parameters.get("themeId");

//Get the DB connection
oSQlcon = $.hdb.getConnection();

oSelectQuery = "select * from \"UIS\".\"sap.hana.uis.db::THEMES\" where id = ?";

oResultSet = oSQlcon.executeQuery(oSelectQuery, oThemeid);

oSQlcon.close();

//Set the response
$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(oResultSet));

}

catch(e) {
	//Set the response
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/plain";
	$.response.setBody(e);
}