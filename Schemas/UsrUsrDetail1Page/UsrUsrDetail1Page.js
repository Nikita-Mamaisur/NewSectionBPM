define("UsrUsrDetail1Page", [], function() {
	return {
		entitySchemaName: "UsrDetail",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Tab4a4fa113TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a4fa113TabLabelTabCaption"
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
				"name": "Tab4a4fa113TabLabelGroup8e52a23d",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a4fa113TabLabelGroup8e52a23dGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a4fa113TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a4fa113TabLabelGroup8e52a23d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCirculation2f9ff911-6410-475d-b6ac-ddc92d648560",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a4fa113TabLabelGridLayout8a825ead"
					},
					"bindTo": "UsrCirculation"
				},
				"parentName": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrDateOfIssue8da54b58-03db-4a3b-aac3-f527d4fc213e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a4fa113TabLabelGridLayout8a825ead"
					},
					"bindTo": "UsrDateOfIssue"
				},
				"parentName": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrResponsibled3468cf0-89da-4501-b672-5725fc63c75d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a4fa113TabLabelGridLayout8a825ead"
					},
					"bindTo": "UsrResponsible"
				},
				"parentName": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrPeriodicity72f66180-0c0b-4e06-aea9-c9ee7b000f2c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab4a4fa113TabLabelGridLayout8a825ead"
					},
					"bindTo": "UsrPeriodicity"
				},
				"parentName": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrReleaseStatus7cdefa55-92f3-475b-b4bd-915dc771fcd2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab4a4fa113TabLabelGridLayout8a825ead"
					},
					"bindTo": "UsrReleaseStatus"
				},
				"parentName": "Tab4a4fa113TabLabelGridLayout8a825ead",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_DIFF*/
	};
});
