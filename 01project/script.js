

let isTodoEditable= false;

const test= () => {
    isTodoEditable= !isTodoEditable;
    return (
        isTodoEditable ? "isTrue" : "isFalse"

        )
}

for (let i = 0; i < 4; i++) {
    console.log(test());
}
