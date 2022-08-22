import { tableRender } from "./tableView.js";
import { getGoods, deleteGoods } from "./service.js";
import { modalController } from "./modalController.js";
import { modal, tableGoods } from "./elems.js"


export const tableController = async () => {

    modalController({
        delegation: {
            parent: tableGoods,
            target: '.table-goods-item',
            targetExclude: '.btn-delete',
        }
    })

    tableGoods.addEventListener('click', async ({target}) => {
        const delBtn = target.closest('.btn-delete');
        if(delBtn){
            const row = delBtn.closest('.table-goods-item');
           const isdel = !!await deleteGoods(row.dataset.id);

           if (isdel) {
            row.remove();
           }
        }
    })
    const goods = await getGoods();

    tableRender(goods)
};