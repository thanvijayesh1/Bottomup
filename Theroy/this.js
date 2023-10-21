const person = {
    id: 1,
    add: function(num) {
       this.id = this.id + num;
       return this; 
    },
    getValue: function() {
        return this.id;
    }
};

person.add(4);
console.log(person.add(4).add(4),person.id)