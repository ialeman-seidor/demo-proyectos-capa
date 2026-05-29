/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["seidor/apps/workzonedemo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
