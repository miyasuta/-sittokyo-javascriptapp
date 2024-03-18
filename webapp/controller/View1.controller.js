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
                const recipient =  {
                    recipientName : "World"
                };
                // JSONモデルを作成
                const model = new JSONModel(recipient);
                // Viewに登録
                this.getView().setModel(model);
            },
            
            onLiveChange(event) {
                // イベントパラメータ：value（入力された値）を取得
                const value = event.getParameter("value");
                // MessageToastで表示
                MessageToast.show(`Value changed to ${value}`);
            },

            onShowHello() {
                // ViewModelからrecipientNameを取得
                const name = this.getView().getModel().getData().recipientName;
                // MessageBoxで表示
                MessageBox.show(`Hello ${name}`);
            }

        });
    });
