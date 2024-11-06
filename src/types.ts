export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  generalInfo?: string;
  domain?: string;
  ip?: string;
  macAddress?: string;
  address?: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
  };
  bank?: {
    cardNumber: string;
    cardType: string;
  };
  university?: string;
  company?: {
    name: string;
    department: string;
    title: string;
  };
  ein?: string;
  ssn?: string;
}