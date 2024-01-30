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
                const oData = {
                    recipient : {
                    name : "World"
                    }
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onShowHello() {
                const data = this.getView().getModel().getData();
                const name = data.recipient.name;
                MessageBox.show(`Hello ${name}`);
            },

            onLiveChange(evt) {
                const value = evt.getParameter("value");
                MessageToast.show(`Value changed to ${value}`);
            }
        });
    });
