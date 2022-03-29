export class DogBreedResult {
  breed: string;
  subBreed: string[];

  constructor(breed: string, subBreed?: string[]) {
    this.breed = breed;
    this.subBreed = subBreed || [];
  }
}

export class DogBreedListResult {
  breeds: DogBreedResult[];

  constructor(obj?: any) {
    this.breeds = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        this.breeds.push(new DogBreedResult(key, obj[key]));
      }
    }
  }
}

export class DogImageResult {
  imageUrl: string;

  constructor(url: string) {
    this.imageUrl = url;
  }
}
