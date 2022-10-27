import { getTotalPrice } from "components/pages/CatalogPage/utils";
import { useCallback, useEffect, useState } from "react";
import { numberService, telegramService } from "services";
import { shoppingCartApi } from "services/apiService/ShoppingCartService";
import { Product } from "types/product";

export const useMainButton = (data: Product[]) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mainButton = telegramService.getMainButton();
  const { getQueryId, ready, onEvent, offEvent } = telegramService;
  const { roundToHundredths } = numberService;

  useEffect(() => {
    ready();
  }, [ready]);

  useEffect(() => {
    mainButton.setParams({
      text: `Купить (Total price ${roundToHundredths(getTotalPrice(data))}$)`,
    });
    data.length ? mainButton.show() : mainButton.hide();
  }, [mainButton, roundToHundredths, data]);

  const onSubmit = useCallback(() => {
    setIsSubmitting(true);
    shoppingCartApi.saveProducts({
      queryId: getQueryId() as string,
      products: data,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    onEvent("mainButtonClicked", onSubmit);
    return () => {
      offEvent("mainButtonClicked", onSubmit);
    };
  }, [offEvent, onEvent, onSubmit]);

  return isSubmitting;
};
