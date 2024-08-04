import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  // create a private cache map to store the data
 
  private cacheMap : Map<string,any> = new Map();
  
   //add a method to set the data in the cache
  set(key: string, data: any): void {
    this.cacheMap.set(key, data);
  }

  // Method to get data from the cache
  get(key: string): any {
    return this.cacheMap.get(key);
  }

}
