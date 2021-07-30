"use strict";
class Product {
    Name;
    Description;
    HighPrice;
    LowPrice;
    Url;
    Supermarket;
    constructor(name, description, highPrice, lowPrice, url, supermarket) {
        this.Name = name ?? 'Sin Información';
        this.Description = description ?? 'Sin Información';
        this.HighPrice = highPrice ?? 'Sin Información';
        this.LowPrice = lowPrice ?? 'Sin Información';
        this.Url = url ?? 'Sin Información';
        this.Supermarket = supermarket ?? 'Sin Información';
    }
    get name() {
        return this.Name;
    }
    ;
    get description() {
        return this.Description;
    }
    ;
    get highPrice() {
        return this.HighPrice;
    }
    ;
    get lowPrice() {
        return this.LowPrice;
    }
    ;
    get url() {
        return this.Url;
    }
    ;
    get supermarket() {
        return this.Supermarket;
    }
    ;
}
