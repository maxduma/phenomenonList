export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  username: string;
  password: string;
  email: string;
  gender: string;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  bloodGroup: string;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
    postalCode: string;
    state: string;
    stateCode: string;
  };
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    name: string;
    department: string;
    title: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
      postalCode: string;
      state: string;
      stateCode: string;
    };
  };
  crypto: {
    coin: string;
    network: string;
    wallet: string;
  };
  ein: string;
  ssn: string;
  image: string;
  phone: string;
  role: string;
  userAgent: string;
  ip: string;
  macAddress: string;
  university: string;
}