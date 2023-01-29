import { ICart } from "../@types/cart";

export const generateJSONBill = (filename: string, bill: ICart[] | undefined, withTotal = false) => 
  () => {
    let total: number
    let json;
    const {stringify, parse} = JSON

    if (withTotal) {
        total = parse(stringify(bill?.reduce((x, y) => {
        x += y.total_price;
        return x;
      }, 0)))
      json = `data:text/json;charset=utf-8,${stringify({ bill, total })}`;
    } else {
      json = `data:text/json;charset=utf-8,${stringify({ bill })}`;
    }

      const data = encodeURI(json);

      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", filename);
      link.click();  
};