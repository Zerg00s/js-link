SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {
  function getBaseHtml(ctx) {
    return SPClientTemplates["_defaultTemplates"].Fields.default.all.all[ctx.CurrentFieldSchema.FieldType][ctx.BaseViewID](ctx);
  }

  function init() {

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides({


      Templates: {

           Fields: {
               "Page_Link": {
                   View: function(ctx) {
                     // console.log(ctx.CurrentItem );
                     // console.log(ctx.CurrentItem.Modified); 
                     let procpdflink = ctx.CurrentItem.procpdflink.replace(".pdf",".aspx").replace("/PdfLib/","/Pages/");
                     const modifiedDate = new Date(ctx.CurrentItem.Modified);
                     
                     const month = modifiedDate.getMonth() + 1;
                     const day = modifiedDate.getDate();
                     const year = modifiedDate.getFullYear();
                     const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;                     
                    
                      
                     return `<a href="${procpdflink}">${ctx.CurrentItem.Title}</a>; ${formattedDate}`; 
                   },
                
               }
           },
     

      },

      ListTemplateType: 101

    });
  }

  RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens("~siteCollection/Style Library/Page_Link.js"), init);
  init();

});
