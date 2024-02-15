sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"    ,
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("javascriptapp.controller.View1", {
            onInit: function () {
                // set data model on view
                const recipient =  {
                    recipientName : "World"
                };
                const oModel = new JSONModel(recipient);
                this.getView().setModel(oModel);
            },

            onShowHello() {
                const name = this.getView().getModel().getProperty("/recipientName");
                MessageBox.show(`Hello ${name}`);
            },

            onLiveChange(event) {
                const value = event.getParameter("value");
                MessageToast.show(`Value changed to ${value}`);
            }
        });
    });
