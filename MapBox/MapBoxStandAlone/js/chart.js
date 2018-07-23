var chart = c3.generate({
    data: {
        columns: [
            buildingHeights
        ],
        type: 'line'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});