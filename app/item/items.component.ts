import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ListViewScrollEventData } from "nativescript-ui-listview";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    @Input() items: Item[];
    @Input() banner: [""];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
    templateSelector(item: any, index: number, items: any): string {
        if (item.role === "header") return "header";
        else return "item";
    }
    onScroll(args: ListViewScrollEventData): void {
       console.log("onScroll args.scrollOffset:", args.scrollOffset);
    }
}
