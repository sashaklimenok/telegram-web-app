class NumberService {
  roundToHundredths = (value: number): number => {
    return (Number(value.toFixed(2)) * 100) / 100;
  };
}

export const numberService = new NumberService();
