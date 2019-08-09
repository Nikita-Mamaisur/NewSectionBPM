define("UsrPeriodicals1Page",  ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "UsrPeriodicals",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrPeriodicalsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrPeriodicals"
				}
			},
			"UsrSchema3Detail79ed0fc0": {
				"schemaName": "UsrSchema3Detail",
				"entitySchemaName": "UsrDetail",
				"filter": {
					"detailColumn": "UsrPeriodicityEdit",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods:
		 {
		 	init: function () {
				this.callParent(arguments);
				this.subscriptionFunction();
				},
			subscriptionFunction: function() {
				Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE,
				this.bpListenerMessage, this);
			},
			bpListenerMessage: function(scope, message) {
			if (message.Body === "UpdateDetail")
			{
				this.updateDetails();
			}
			},
		 	getActions: function() {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getActionsMenuItem({
					Type: "Terrasoft.MenuSeparator",
					Caption: ""
				}));
				actionMenuItems.addItem(this.getActionsMenuItem({
					"Click": { "bindTo": "callCustomProcess" },
					"Visible": true,
					"Caption": { "bindTo": "Resources.Strings.actionButtonAddDetail" },
					"Enabled": true,
				}));
				return actionMenuItems;
			},
			callCustomProcess: function() {
				var args = {
					sysProcessName: "UsrProcess1",
					parameters: {
						parameterId: this.$Id
					}
				};
				ProcessModuleUtilities.executeProcess(args);
			},
		 	getParentMethod: function() {
				var method,
				superMethod = (method = this.getParentMethod.caller) && (method.$previous ||
				((method = method.$owner ? method : method.caller) &&
				method.$owner.superclass[method.$name]));
				return superMethod;
				},
			save: function() {
				var parentSave = this.getParentMethod();
				var parentArguments = arguments;
					var checkIsValid =this.get("Operation");
				if (checkIsValid === Terrasoft.ConfigurationEnums.CardOperation.ADD ||
				checkIsValid === Terrasoft.ConfigurationEnums.CardOperation.EDIT)
				{

						this.HelperCheck(parentSave, parentArguments);
				}
				else
				{
					parentSave.apply(this, parentArguments);
				}
									},
		HelperCheck:function(parentSave, parentArguments)	{
			var a;
				this.Terrasoft.SysSettings.querySysSettingsItem("MaxValDailyPublication",
				function(value) {
				this.set("MaxValDailyPublication", value);
				a = value;
								}, this);
				if (this.get("UsrPeriodicity").value !== "1f551de5-542b-416a-b42b-56f8bb4c191b") {
					parentSave.apply(this, parentArguments);
				}
				else{
			var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
			rootSchemaName: "UsrPeriodicals"
			});
			var esqFirstFilter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
																	"UsrPeriodicity", "1F551DE5-542B-416A-B42B-56F8BB4C191B");
			var esqFirstFilter2 = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
																	"UsrActive", "1");
			esq.filters.logicalOperation = Terrasoft.LogicalOperatorType.AND;
			esq.filters.add("AddFilter", esqFirstFilter);
			esq.filters.add("AddFilter2", esqFirstFilter2);
			
			esq.getEntityCollection (function (result) {
			if ((result.collection.collection.length >= a))
			{
				var value = ("производственные мощности ограничены и допускается не более " + a + " изданий в день");
				this.showInformationDialog(value);
			}
			else 
			{
			parentSave.apply(this, parentArguments);
			}
		}, this);
		}
		}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName579b8000-b263-4fc2-b9b7-b53ce2f72c29",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe08074a4TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe08074a4TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe08074a4TabLabelGroupd76bea76",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe08074a4TabLabelGroupd76bea76GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe08074a4TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe08074a4TabLabelGridLayout7fb6a1e7",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe08074a4TabLabelGroupd76bea76",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER8b6091f5-4885-4281-8b0a-8dae315ade06",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe08074a4TabLabelGridLayout7fb6a1e7"
					},
					"bindTo": "UsrCode",
					"enabled": true
				},
				"parentName": "Tabe08074a4TabLabelGridLayout7fb6a1e7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7c099104-9245-49f2-96c0-cfd93189b87a",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 4,
						"row": 0,
						"layoutName": "Tabe08074a4TabLabelGridLayout7fb6a1e7"
					},
					"bindTo": "UsrPeriodicity",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe08074a4TabLabelGridLayout7fb6a1e7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATE563e16aa-94f6-4ba1-9d20-58d55bdf3012",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 10,
						"row": 0,
						"layoutName": "Tabe08074a4TabLabelGridLayout7fb6a1e7"
					},
					"bindTo": "UsrLastReleaseDate",
					"enabled": true
				},
				"parentName": "Tabe08074a4TabLabelGridLayout7fb6a1e7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN0577cad7-d3c6-498c-95a1-a93bc7ec801c",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe08074a4TabLabelGridLayout7fb6a1e7"
					},
					"bindTo": "UsrActive",
					"enabled": true
				},
				"parentName": "Tabe08074a4TabLabelGridLayout7fb6a1e7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrSchema3Detail79ed0fc0",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabe08074a4TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4e591691TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4e591691TabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4e591691TabLabelGroupbfafad6f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4e591691TabLabelGroupbfafad6fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4e591691TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4e591691TabLabelGridLayout8c6f539a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4e591691TabLabelGroupbfafad6f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPec8cd299-c5b1-484c-9eae-e1ee41af240c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4e591691TabLabelGridLayout8c6f539a"
					},
					"bindTo": "UsrResponsible",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4e591691TabLabelGridLayout8c6f539a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING485ff178-7c26-4220-8d5e-5bf0afaff056",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4e591691TabLabelGridLayout8c6f539a"
					},
					"bindTo": "UsrComment",
					"enabled": true
				},
				"parentName": "Tab4e591691TabLabelGridLayout8c6f539a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
