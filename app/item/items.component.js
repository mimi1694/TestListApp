"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.templateSelector = function (item, index, items) {
        if (item.role === "header")
            return "header";
        else
            return "item";
    };
    ItemsComponent.prototype.onScroll = function (args) {
        console.log("onScroll args.scrollOffset:", args.scrollOffset);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ItemsComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ItemsComponent.prototype, "banner", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELCtDQUE2QztBQVE3QztJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBUyxFQUFFLEtBQWEsRUFBRSxLQUFVO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJO1lBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLElBQTZCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFoQlE7UUFBUixZQUFLLEVBQUU7O2lEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7O2tEQUFjO0lBRmIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPbUMsMEJBQVc7T0FObkMsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBJdGVtW107XG4gICAgQElucHV0KCkgYmFubmVyOiBbXCJcIl07XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgdGVtcGxhdGVTZWxlY3RvcihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS5yb2xlID09PSBcImhlYWRlclwiKSByZXR1cm4gXCJoZWFkZXJcIjtcbiAgICAgICAgZWxzZSByZXR1cm4gXCJpdGVtXCI7XG4gICAgfVxuICAgIG9uU2Nyb2xsKGFyZ3M6IExpc3RWaWV3U2Nyb2xsRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgY29uc29sZS5sb2coXCJvblNjcm9sbCBhcmdzLnNjcm9sbE9mZnNldDpcIiwgYXJncy5zY3JvbGxPZmZzZXQpO1xuICAgIH1cbn1cbiJdfQ==