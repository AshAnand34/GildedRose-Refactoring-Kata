export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      var isAgedBrie: boolean = this.items[i].name == 'Aged Brie';
      var isBackstagePass: boolean = this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert';
      var isSulfuras: boolean = this.items[i].name == 'Sulfuras, Hand of Ragnaros';
      var isConjured: boolean = this.items[i].name.includes("Conjured");
      
      if (isAgedBrie) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
      else if (isBackstagePass) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          
          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      }
      else if (isSulfuras) {
        continue
      }
      else {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;
        
        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
    }

    return this.items;
  }
}
