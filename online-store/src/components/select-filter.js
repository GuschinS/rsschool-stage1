import json from '../data.json';

let selectCategoryArray = json;

function selectCategory() {
    const selectCategoryAll = document.querySelectorAll('.select');
    selectCategoryArray = [];
    selectCategoryAll.forEach((el) => {
        json.forEach((e) => {
            if (e.category === el.id) {
                selectCategoryArray.push(e);
            }
        });
    });
    if (selectCategoryAll.length === 0) {
        selectCategoryArray = json;
    }
    console.log('selectCategoryArray: ', selectCategoryArray);
    console.log('selectCategoryArray.length: ', selectCategoryArray.length);
}

export { selectCategory };
