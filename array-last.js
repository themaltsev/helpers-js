if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};


let lastItem = $$('.stat-main')[$$('.stat-main').length - 1];
