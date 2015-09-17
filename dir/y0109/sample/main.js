
import React from 'react'
import RB from 'react_bootstrap'

import Allblocks from './Allblocks'

var showcount = 10;                             // кількість видимих елементів
var matrix = [
    ["Office1", 1, "Frankivsky region1", "Vidkryta street1"],
    ["Office2", 2, "Frankivsky region2", "Vidkryta street2"],
    ["Office3", 3, "Frankivsky region3", "Vidkryta street3"],
    ["Office4", 4, "Frankivsky region4", "Vidkryta street4"],
    ["Office5", 5, "Frankivsky region5", "Vidkryta street5"],
    ["Office6", 6, "Frankivsky region6", "Vidkryta street6"],
    ["Office7", 7, "Frankivsky region7", "Vidkryta street7"],
    ["Office8", 8, "Frankivsky region8", "Vidkryta street8"],
    ["Office9", 9, "Frankivsky region9", "Vidkryta street9"],
    ["Office10", 10, "Frankivsky region 10", "Vidkryta street10"],
    ["Office11", 11, "Frankivsky region 11", "Vidkryta street11"],
    ["Office12", 12, "Frankivsky region 12", "Vidkryta street12"],
    ["Office13", 13, "Frankivsky region 13", "Vidkryta street13"],
    ["Office14", 14, "Frankivsky region 14", "Vidkryta street14"],
    ["Office15", 15, "Frankivsky region 15", "Vidkryta street15"]
];

var keys = {
    kind: "",
    price: "",
    region: "region",
    street: "street"
};


React.render(<Allblocks massive={matrix} keys={keys}  showcount={showcount} />, document.getElementsByClassName('wrap')[0]);


