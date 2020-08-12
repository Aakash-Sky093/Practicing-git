sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("IU.ImageUploder.controller.Main", {
		onInit: function () {

		},
		onUploadImage: function () {
			debugger;
			
			this.image = this.getView().byId("fileUploader").oFileUpload.files[0];
			this.imagepath = URL.createObjectURL(this.image);
			var image = this.getView().byId("imageId");
			image.setSrc(this.imagepath);

		}
	});
});