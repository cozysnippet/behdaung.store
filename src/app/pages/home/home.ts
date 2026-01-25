import { Component } from '@angular/core';
import {HeroSectionOne} from '../../components/hero-section-one/hero-section-one';
import {HeroSectionTwo} from '../../components/hero-section-two/hero-section-two';
import {CategoriesSection} from '../../components/categories-section/categories-section';
import {ProductGrid} from '../../components/product-grid/product-grid';
import {FeaturedCollections} from '../../components/featured-collections/featured-collections';
import {BrandPhilosophy} from '../../components/brand-philosophy/brand-philosophy';
import {InstagramFeed} from '../../components/instagram-feed/instagram-feed';
import {GoogleAuth} from '../../components/google-auth/google-auth';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionOne,
    CategoriesSection,
    ProductGrid,
    FeaturedCollections,
    BrandPhilosophy,
    InstagramFeed
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  showSecondDesign = false;

  toggleDesign(): void {
    this.showSecondDesign = !this.showSecondDesign;
  }

}
