

function groupingDishes(dishes) {
    let meals = [];
    let components = {};

    for (let i = 0; i < dishes.length; i++) {
        meals.push(dishes[i][0]);
        for (let j = 1; j < dishes[i].length; j++) {
            if (!components[dishes[i][j]]) {
                components[dishes[i][j]] = [].push(dishes[i])
            }
            else {
                let temp = components[dishes[i][j]];
                console.log(temp)
                components[dishes[i][j]] = temp.push(dishes[i]);
            }
        }
    }





    console.log(" COMPONENT : ", components)
    console.log(" MEAL : ", meals.sort());
}

let dishes = [
    ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
]

groupingDishes(dishes);

/**
 *
 * [
 *
    ["Cheese", "Quesadilla", "Sandwich"],
    ["Salad", "Salad", "Sandwich"],
    ["Sauce", "Pizza", "Quesadilla", "Salad"],
    ["Tomato", "Pizza", "Salad", "Sandwich"]



    'Tomato',
    'Salad',
    'Sauce',
    'Cheese',


    'Cucumber',
    'Sausage',
    'Dough',
    'Chicken',
    'Bread'

]

 */