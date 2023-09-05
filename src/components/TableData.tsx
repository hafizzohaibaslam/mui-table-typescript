export const rows: RowData[] = [
    {
      name: 'Toyota Camry',
      calories: 200,
      fat: 25,
      carbs: 30,
      protein: 4.5,
      price: 25000,
    },
    {
      name: 'Honda Civic',
      calories: 180,
      fat: 30,
      carbs: 35,
      protein: 4.2,
      price: 22000,
    },
    {
      name: 'Ford Mustang',
      calories: 450,
      fat: 15,
      carbs: 20,
      protein: 5.0,
      price: 40000,
    },
    {
      name: 'Chevrolet Silverado',
      calories: 350,
      fat: 18,
      carbs: 22,
      protein: 6.5,
      price: 35000,
    },
    {
      name: 'Tesla Model 3',
      calories: 220,
      fat: 50,
      carbs: 60,
      protein: 4.0,
      price: 45000,
    },
    {
      name: 'Nissan Altima',
      calories: 190,
      fat: 22,
      carbs: 28,
      protein: 3.8,
      price: 23000,
    },
    {
      name: 'BMW X5',
      calories: 280,
      fat: 28,
      carbs: 25,
      protein: 4.8,
      price: 60000,
    },
    {
      name: 'Ford Explorer',
      calories: 320,
      fat: 20,
      carbs: 18,
      protein: 4.7,
      price: 38000,
    },
  ];
  
  // Define the shape of your data with an interface
  export interface RowData {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    price: number;
  }
  