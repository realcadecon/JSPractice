//line 1
const AD_3 = {name:"3AD", x:100, y:80};
const D_3 = {name:"3D", x:100, y:130};
const CD_3 = {name:"3CD", x:100, y:170};
const AD_2 = {name:"2AD", x:100, y:200};
const D_2 = {name:"2D", x:100, y:240};
const CD_2 = {name:"2CD", x:100, y:280};
const LM = {name:"LM", x:100, y:300};
const AD_1 = {name:"1AD", x:100, y:320};
const D_1 = {name:"1D", x:100, y:360};
const CD_1 = {name:"1CD", x:100, y:400};

//line 2
const A_3 = {name:"3A", x:160, y:80};
const C_3 = {name:"3C", x:160, y:170};
const A_2 = {name:"2A", x:160, y:200};
const C_2 = {name:"2C", x:160, y:280};
const A_1 = {name:"1A", x:160, y:320};
const C_1 = {name:"1C", x:160, y:400};
const E2_1 = {name:"E2_1", x:160, y:450};
const E2_0 = {name:"E2_0", x:160, y:480};

//line 3
const AB_3 = {name:"3AB", x:210, y:80};
const B_3 = {name:"3B", x:210, y:130};
const BC_3 = {name:"3BC", x:210, y:170};
const AB_2 = {name:"2AB", x:210, y:200};
const B_2 = {name:"2B", x:210, y:240};
const BC_2 = {name:"2BC", x:210, y:280};
const AB_1 = {name:"1AB", x:210, y:320};
const B_1 = {name:"1B", x:210, y:360};
const BC_1 = {name:"1BC", x:210, y:400};

//line 4
const AD_4 = {name:"4AD", x:270, y:80};
const D_4 = {name:"4D", x:270, y:130};
const CD_4 = {name:"4CD", x:270, y:170};
const H_00 = {name:"H00", x:270, y:200};
const H_01 = {name:"H01", x:270, y:240};
const H_02 = {name:"H02", x:270, y:300};
const H_03 = {name:"H03", x:270, y:360};
const H_04 = {name:"H04", x:270, y:400};
const H_05 = {name:"H05", x:270, y:450};

//line 5
const A_4 = {name:"4A", x:330, y:80};
const C_4 = {name:"4C", x:330, y:170};
const H_10 = {name:"H10", x:330, y:200};
const H_11 = {name:"H11", x:330, y:240};
const H_12 = {name:"H12", x:330, y:300};
const H_13 = {name:"H13", x:330, y:360};
const H_14 = {name:"H14", x:330, y:400};
const H_15 = {name:"H15", x:330, y:450};

//line 6
const AB_4 = {name:"4AB", x:380, y:80};
const B_4 = {name:"4B", x:380, y:130};
const BC_4 = {name:"4BC", x:380, y:170};
const H_20 = {name:"H20", x:380, y:200};
const H_21 = {name:"H21", x:380, y:240};
const H_22 = {name:"H22", x:380, y:300};
const H_23 = {name:"H23", x:380, y:360};
const H_24 = {name:"H24", x:380, y:400};
const H_25 = {name:"H25", x:380, y:450};

//line 7
const AD_5 = {name:"5AD", x:450, y:80};
const D_5 = {name:"5D", x:450, y:130};
const CD_5 = {name:"5CD", x:450, y:170};
const H_30 = {name:"H30", x:450, y:200};
const H_31 = {name:"H31", x:450, y:240};
const H_32 = {name:"H32", x:450, y:300};
const AD_6 = {name:"6AD", x:450, y:360};
const D_6 = {name:"6D", x:450, y:400};
const CD_6 = {name:"6CD", x:450, y:450};

//line 8
const A_5 = {name:"5A", x:510, y:80};
const C_5 = {name:"5C", x:510, y:170};
const H_41 = {name:"H41", x:510, y:240};
const A_6 = {name:"6A", x:510, y:360};
const C_6 = {name:"6C", x:510, y:450};

//line 9 
const AB_5 = {name:"5AB", x:570, y:80};
const B_5 = {name:"5B", x:570, y:130};
const BC_5 = {name:"5BC", x:570, y:170};
const FIT = {name:"H51", x:570, y:240};
const AB_6 = {name:"6AB", x:570, y:360};
const B_6 = {name:"6B", x:570, y:400};
const BC_6 = {name:"6BC", x:570, y:450};

export function addMustVisitToGraph(nordstromMap){
    nordstromMap.addMustVisit(E2_0);
    nordstromMap.addMustVisit(FIT);
    nordstromMap.addMustVisit(AD_3);
    nordstromMap.addMustVisit(A_1);
    nordstromMap.addMustVisit(AD_6);
    nordstromMap.addMustVisit(AB_6);
    nordstromMap.addMustVisit(D_6);
    nordstromMap.addMustVisit(C_6);
    nordstromMap.addMustVisit(B_3);
    nordstromMap.addMustVisit(CD_4);
}

export function addVerticesToGraph(nordstromMap){
    //line 1
    nordstromMap.addVertex(AD_3);
    nordstromMap.addVertex(D_3);
    nordstromMap.addVertex(CD_3);
    nordstromMap.addVertex(AD_2);
    nordstromMap.addVertex(D_2);
    nordstromMap.addVertex(CD_2);
    nordstromMap.addVertex(LM);
    nordstromMap.addVertex(AD_1);
    nordstromMap.addVertex(D_1);
    nordstromMap.addVertex(CD_1);
    nordstromMap.addVertex(A_3);
    //line 2
    nordstromMap.addVertex(C_3);
    nordstromMap.addVertex(A_2);
    nordstromMap.addVertex(C_2);
    nordstromMap.addVertex(A_1);
    nordstromMap.addVertex(C_1);
    nordstromMap.addVertex(E2_1);
    nordstromMap.addVertex(E2_0);
    //line 3
    nordstromMap.addVertex(AB_3);
    nordstromMap.addVertex(B_3);
    nordstromMap.addVertex(BC_3);
    nordstromMap.addVertex(AB_2);
    nordstromMap.addVertex(B_2);
    nordstromMap.addVertex(BC_2);
    nordstromMap.addVertex(AB_1);
    nordstromMap.addVertex(B_1);
    nordstromMap.addVertex(BC_1);
    //line 4
    nordstromMap.addVertex(AD_4);
    nordstromMap.addVertex(D_4);
    nordstromMap.addVertex(CD_4);
    nordstromMap.addVertex(H_00);
    nordstromMap.addVertex(H_01);
    nordstromMap.addVertex(H_02);
    nordstromMap.addVertex(H_03);
    nordstromMap.addVertex(H_04);
    nordstromMap.addVertex(H_05);
    //line 5
    nordstromMap.addVertex(A_4);
    nordstromMap.addVertex(C_4);
    nordstromMap.addVertex(H_10);
    nordstromMap.addVertex(H_11);
    nordstromMap.addVertex(H_12);
    nordstromMap.addVertex(H_13);
    nordstromMap.addVertex(H_14);
    nordstromMap.addVertex(H_15);
    //line 6
    nordstromMap.addVertex(AB_4);
    nordstromMap.addVertex(B_4);
    nordstromMap.addVertex(BC_4);
    nordstromMap.addVertex(H_20);
    nordstromMap.addVertex(H_21);
    nordstromMap.addVertex(H_22);
    nordstromMap.addVertex(H_23);
    nordstromMap.addVertex(H_24);
    nordstromMap.addVertex(H_25);
    //line 7
    nordstromMap.addVertex(AD_5);
    nordstromMap.addVertex(D_5);
    nordstromMap.addVertex(CD_5);
    nordstromMap.addVertex(H_30);
    nordstromMap.addVertex(H_31);
    nordstromMap.addVertex(H_32);
    nordstromMap.addVertex(AD_6);
    nordstromMap.addVertex(D_6);
    nordstromMap.addVertex(CD_6);
    //line 8
    nordstromMap.addVertex(A_5);
    nordstromMap.addVertex(C_5);
    nordstromMap.addVertex(H_41);
    nordstromMap.addVertex(A_6);
    nordstromMap.addVertex(C_6);
    //line 9
    nordstromMap.addVertex(AB_5);
    nordstromMap.addVertex(B_5);
    nordstromMap.addVertex(BC_5);
    nordstromMap.addVertex(FIT);
    nordstromMap.addVertex(AB_6);
    nordstromMap.addVertex(B_6);
    nordstromMap.addVertex(BC_6);
}

export function addEdgesToGraph(nordstromMap){
    //line 1 vert
    nordstromMap.addEdge(D_3, AD_3);
    nordstromMap.addEdge(CD_3, D_3);
    nordstromMap.addEdge(AD_2, CD_3);
    nordstromMap.addEdge(D_2, AD_2);
    nordstromMap.addEdge(CD_2, D_2);
    nordstromMap.addEdge(LM, CD_2);
    nordstromMap.addEdge(AD_1, LM);
    nordstromMap.addEdge(D_1, AD_1);
    nordstromMap.addEdge(CD_1, D_1);
    //line 2 vert
    nordstromMap.addEdge(A_2, C_3);
    nordstromMap.addEdge(A_1, C_2);
    nordstromMap.addEdge(E2_1, C_1);
    nordstromMap.addEdge(E2_0, E2_1);
    //line 3 vert
    nordstromMap.addEdge(B_3, AB_3);
    nordstromMap.addEdge(BC_3, B_3);
    nordstromMap.addEdge(AB_2, BC_3);
    nordstromMap.addEdge(B_2, AB_2);
    nordstromMap.addEdge(BC_2, B_2);
    nordstromMap.addEdge(AB_1, BC_2);
    nordstromMap.addEdge(B_1, AB_1);
    nordstromMap.addEdge(BC_1, B_1);
    //line 1 + 2 + 3 horz
    nordstromMap.addEdge(AD_3, A_3);
    nordstromMap.addEdge(A_3, AB_3);
    nordstromMap.addEdge(CD_3, C_3);
    nordstromMap.addEdge(C_3, BC_3);
    nordstromMap.addEdge(AD_2, A_2);
    nordstromMap.addEdge(A_2, AB_2);
    nordstromMap.addEdge(CD_2, C_2);
    nordstromMap.addEdge(C_2, BC_2);
    nordstromMap.addEdge(AD_1, A_1);
    nordstromMap.addEdge(A_1, AB_1);
    nordstromMap.addEdge(CD_1, C_1);
    nordstromMap.addEdge(C_1, BC_1);
    //line 4 vert
    nordstromMap.addEdge(AD_4, D_4);
    nordstromMap.addEdge(D_4, CD_4);
    nordstromMap.addEdge(CD_4, H_00);
    nordstromMap.addEdge(H_00, H_01);
    nordstromMap.addEdge(H_01, H_02);
    nordstromMap.addEdge(H_02, H_03);
    nordstromMap.addEdge(H_03, H_04);
    nordstromMap.addEdge(H_04, H_05);
    //line 3 + 4 horz
    nordstromMap.addEdge(AB_3, AD_4);
    nordstromMap.addEdge(BC_3, CD_4);
    nordstromMap.addEdge(AB_2, H_00);
    nordstromMap.addEdge(B_2, H_01);
    nordstromMap.addEdge(B_1, H_03);
    nordstromMap.addEdge(BC_1, H_04);
    nordstromMap.addEdge(E2_1, H_05);
    //line 5 vert    
    nordstromMap.addEdge(C_4, H_10);
    nordstromMap.addEdge(H_10, H_11);
    nordstromMap.addEdge(H_11, H_12);
    nordstromMap.addEdge(H_12, H_13);
    nordstromMap.addEdge(H_13, H_14);
    nordstromMap.addEdge(H_14, H_15);
    //line 6 vert
    nordstromMap.addEdge(AB_4, B_4);
    nordstromMap.addEdge(B_4, BC_4);
    nordstromMap.addEdge(BC_4, H_20);
    nordstromMap.addEdge(H_20, H_21);
    nordstromMap.addEdge(H_21, H_22);
    nordstromMap.addEdge(H_22, H_23);
    nordstromMap.addEdge(H_23, H_24);
    nordstromMap.addEdge(H_24, H_25);
    //line 4 + 5 + 6 horz
    nordstromMap.addEdge(AD_4, A_4);
    nordstromMap.addEdge(A_4, AB_4);
    nordstromMap.addEdge(CD_4, C_4);
    nordstromMap.addEdge(C_4, BC_4);
    nordstromMap.addEdge(H_00, H_10);
    nordstromMap.addEdge(H_10, H_20);
    nordstromMap.addEdge(H_01, H_11);
    nordstromMap.addEdge(H_11, H_21);
    nordstromMap.addEdge(H_02, H_12);
    nordstromMap.addEdge(H_12, H_22);
    nordstromMap.addEdge(H_03, H_13);
    nordstromMap.addEdge(H_13, H_23);
    nordstromMap.addEdge(H_04, H_14);
    nordstromMap.addEdge(H_14, H_24);
    nordstromMap.addEdge(H_05, H_15);
    nordstromMap.addEdge(H_15, H_25);
    //special
    nordstromMap.addEdge(LM, H_02);
    //line 7 vert
    nordstromMap.addEdge(AD_5, D_5);
    nordstromMap.addEdge(D_5, CD_5);
    nordstromMap.addEdge(CD_5, H_30);
    nordstromMap.addEdge(H_30, H_31);
    nordstromMap.addEdge(H_31, H_32);
    nordstromMap.addEdge(H_32, AD_6);
    nordstromMap.addEdge(AD_6, D_6);
    nordstromMap.addEdge(D_6, CD_6);
    //line 6 + 7 horz
    nordstromMap.addEdge(AB_4, AD_5);
    nordstromMap.addEdge(B_4, D_5);
    nordstromMap.addEdge(BC_4, CD_5);
    nordstromMap.addEdge(H_20, H_30);
    nordstromMap.addEdge(H_21, H_31);
    nordstromMap.addEdge(H_22, H_32);
    nordstromMap.addEdge(H_23, AD_6);
    nordstromMap.addEdge(H_24, D_6);
    nordstromMap.addEdge(H_25, CD_6);
    //line 8 vert
    nordstromMap.addEdge(C_5, H_41);
    nordstromMap.addEdge(H_41, A_6);
    //line 9 vert
    nordstromMap.addEdge(AB_5, B_5);
    nordstromMap.addEdge(B_5, BC_5);
    nordstromMap.addEdge(BC_5, FIT);
    nordstromMap.addEdge(FIT, AB_6);
    nordstromMap.addEdge(AB_6, B_6);
    nordstromMap.addEdge(B_6, BC_6);
    //line 7 + 8 + 9 horz
    nordstromMap.addEdge(AD_5, A_5);
    nordstromMap.addEdge(A_5, AB_5);
    nordstromMap.addEdge(CD_5, C_5);
    nordstromMap.addEdge(C_5, BC_5);
    nordstromMap.addEdge(H_31, H_41);
    nordstromMap.addEdge(H_41, FIT);
    nordstromMap.addEdge(AD_6, A_6);
    nordstromMap.addEdge(A_6, AB_6);
    nordstromMap.addEdge(CD_6, C_6);
    nordstromMap.addEdge(C_6, BC_6);

    //line H diagonal
    nordstromMap.addEdge(E2_1, H_04);

    nordstromMap.addEdge(H_05, H_14);
    nordstromMap.addEdge(H_05, H_13);
    nordstromMap.addEdge(H_05, H_12);
    nordstromMap.addEdge(H_05, H_11);
    nordstromMap.addEdge(H_05, H_10);
    nordstromMap.addEdge(H_05, C_4);
    nordstromMap.addEdge(H_05, H_24);
    nordstromMap.addEdge(H_05, H_23);
    nordstromMap.addEdge(H_05, H_22);
    nordstromMap.addEdge(H_05, H_21);
    nordstromMap.addEdge(H_05, H_20);
    nordstromMap.addEdge(H_05, BC_4);
    nordstromMap.addEdge(H_05, D_6);
    nordstromMap.addEdge(H_05, AD_6);
    nordstromMap.addEdge(H_05, H_32);
    nordstromMap.addEdge(H_05, H_31);
    nordstromMap.addEdge(H_05, H_30);
    nordstromMap.addEdge(H_05, CD_5);
    nordstromMap.addEdge(H_05, D_5);
    nordstromMap.addEdge(H_05, H_41);
    nordstromMap.addEdge(H_05, FIT);

    nordstromMap.addEdge(H_04, H_15);
    nordstromMap.addEdge(H_04, H_13);
    nordstromMap.addEdge(H_04, H_12);
    nordstromMap.addEdge(H_04, H_11);
    nordstromMap.addEdge(H_04, H_10);
    nordstromMap.addEdge(H_04, C_4);
    nordstromMap.addEdge(H_04, H_25);
    nordstromMap.addEdge(H_04, H_23);
    nordstromMap.addEdge(H_04, H_22);
    nordstromMap.addEdge(H_04, H_21);
    nordstromMap.addEdge(H_04, H_20);
    nordstromMap.addEdge(H_04, BC_4);
    nordstromMap.addEdge(H_04, CD_6);
    nordstromMap.addEdge(H_04, AD_6);
    nordstromMap.addEdge(H_04, H_32);
    nordstromMap.addEdge(H_04, H_31);
    nordstromMap.addEdge(H_04, H_30);
    nordstromMap.addEdge(H_04, CD_5);
    nordstromMap.addEdge(H_04, D_5);
    nordstromMap.addEdge(H_04, H_41);
    nordstromMap.addEdge(H_04, FIT);
    nordstromMap.addEdge(H_04, BC_5);

    nordstromMap.addEdge(H_03, H_15);
    nordstromMap.addEdge(H_03, H_14);
    nordstromMap.addEdge(H_03, H_12);
    nordstromMap.addEdge(H_03, H_11);
    nordstromMap.addEdge(H_03, H_10);
    nordstromMap.addEdge(H_03, C_4);
    nordstromMap.addEdge(H_03, H_25);
    nordstromMap.addEdge(H_03, H_24);
    nordstromMap.addEdge(H_03, H_22);
    nordstromMap.addEdge(H_03, H_21);
    nordstromMap.addEdge(H_03, H_20);
    nordstromMap.addEdge(H_03, BC_4);
    nordstromMap.addEdge(H_03, CD_6);
    nordstromMap.addEdge(H_03, D_6);
    nordstromMap.addEdge(H_03, H_32);
    nordstromMap.addEdge(H_03, H_31);
    nordstromMap.addEdge(H_03, H_30);
    nordstromMap.addEdge(H_03, CD_5);
    nordstromMap.addEdge(H_03, D_5);
    nordstromMap.addEdge(H_03, H_41);
    nordstromMap.addEdge(H_03, FIT);
    nordstromMap.addEdge(H_03, BC_5);

    nordstromMap.addEdge(H_02, H_15);
    nordstromMap.addEdge(H_02, H_14);
    nordstromMap.addEdge(H_02, H_13);
    nordstromMap.addEdge(H_02, H_11);
    nordstromMap.addEdge(H_02, H_10);
    nordstromMap.addEdge(H_02, C_4);
    nordstromMap.addEdge(H_02, H_25);
    nordstromMap.addEdge(H_02, H_24);
    nordstromMap.addEdge(H_02, H_23);
    nordstromMap.addEdge(H_02, H_21);
    nordstromMap.addEdge(H_02, H_20);
    nordstromMap.addEdge(H_02, BC_4);
    nordstromMap.addEdge(H_02, CD_6);
    nordstromMap.addEdge(H_02, D_6);
    nordstromMap.addEdge(H_02, H_31);
    nordstromMap.addEdge(H_02, H_30);
    nordstromMap.addEdge(H_02, CD_5);
    nordstromMap.addEdge(H_02, D_5);
    nordstromMap.addEdge(H_02, H_41);
    nordstromMap.addEdge(H_02, FIT);
    nordstromMap.addEdge(H_02, BC_5);
    nordstromMap.addEdge(H_02, AD_6);
    nordstromMap.addEdge(H_02, A_6);
    nordstromMap.addEdge(H_02, AB_6);

    nordstromMap.addEdge(H_01, H_15);
    nordstromMap.addEdge(H_01, H_14);
    nordstromMap.addEdge(H_01, H_13);
    nordstromMap.addEdge(H_01, H_12);
    nordstromMap.addEdge(H_01, H_10);
    nordstromMap.addEdge(H_01, C_4);
    nordstromMap.addEdge(H_01, H_25);
    nordstromMap.addEdge(H_01, H_24);
    nordstromMap.addEdge(H_01, H_23);
    nordstromMap.addEdge(H_01, H_22);
    nordstromMap.addEdge(H_01, H_20);
    nordstromMap.addEdge(H_01, BC_4);
    nordstromMap.addEdge(H_01, CD_6);
    nordstromMap.addEdge(H_01, D_6);
    nordstromMap.addEdge(H_01, H_32);
    nordstromMap.addEdge(H_01, H_30);
    nordstromMap.addEdge(H_01, CD_5);
    nordstromMap.addEdge(H_01, D_5);
    nordstromMap.addEdge(H_01, BC_5);
    nordstromMap.addEdge(H_01, AD_6);
    nordstromMap.addEdge(H_01, A_6);
    nordstromMap.addEdge(H_01, AB_6);

    nordstromMap.addEdge(H_00, H_15);
    nordstromMap.addEdge(H_00, H_14);
    nordstromMap.addEdge(H_00, H_13);
    nordstromMap.addEdge(H_00, H_12);
    nordstromMap.addEdge(H_00, H_11);
    nordstromMap.addEdge(H_00, C_4);
    nordstromMap.addEdge(H_00, H_25);
    nordstromMap.addEdge(H_00, H_24);
    nordstromMap.addEdge(H_00, H_23);
    nordstromMap.addEdge(H_00, H_22);
    nordstromMap.addEdge(H_00, H_21);
    nordstromMap.addEdge(H_00, BC_4);
    nordstromMap.addEdge(H_00, CD_6);
    nordstromMap.addEdge(H_00, D_6);
    nordstromMap.addEdge(H_00, H_32);
    nordstromMap.addEdge(H_00, H_31);
    nordstromMap.addEdge(H_00, CD_5);
    nordstromMap.addEdge(H_00, D_5);
    nordstromMap.addEdge(H_00, H_41);
    nordstromMap.addEdge(H_00, FIT);
    nordstromMap.addEdge(H_00, BC_5);
    nordstromMap.addEdge(H_00, AD_6);
    nordstromMap.addEdge(H_00, A_6);
    nordstromMap.addEdge(H_00, AB_6);

    //line 1 + 2 + 3 diagonal
    nordstromMap.addEdge(E2_1, CD_1);
    nordstromMap.addEdge(E2_1, BC_1);
    nordstromMap.addEdge(AD_1, BC_2);
    nordstromMap.addEdge(AB_1, CD_2);
    nordstromMap.addEdge(AB_1, C_2);
    nordstromMap.addEdge(AD_1, C_2);
    nordstromMap.addEdge(CD_2, A_1);
    nordstromMap.addEdge(BC_2, A_1);
    
    nordstromMap.addEdge(AD_2, BC_3);
    nordstromMap.addEdge(AB_2, CD_3);
    nordstromMap.addEdge(AD_2, C_3);
    nordstromMap.addEdge(AB_2, C_3);
    nordstromMap.addEdge(A_2, CD_3);
    nordstromMap.addEdge(A_2, BC_3);

    //line 3 diagonal
    nordstromMap.addEdge(BC_1, H_03);
    nordstromMap.addEdge(BC_1, H_02);
    nordstromMap.addEdge(BC_1, H_01);
    nordstromMap.addEdge(BC_1, H_00);
    nordstromMap.addEdge(BC_1, CD_4);
    nordstromMap.addEdge(BC_1, D_4);
    nordstromMap.addEdge(BC_1, AD_4);
    nordstromMap.addEdge(BC_1, C_4);
    nordstromMap.addEdge(BC_1, BC_4);
    nordstromMap.addEdge(BC_1, CD_5);
    nordstromMap.addEdge(BC_1, C_5);
    nordstromMap.addEdge(BC_1, BC_5);
    nordstromMap.addEdge(BC_1, CD_6);
    nordstromMap.addEdge(BC_1, AD_6);
    nordstromMap.addEdge(BC_1, FIT);

    nordstromMap.addEdge(B_1, H_04);
    nordstromMap.addEdge(B_1, H_02);
    nordstromMap.addEdge(B_1, H_01);
    nordstromMap.addEdge(B_1, H_00);
    nordstromMap.addEdge(B_1, CD_4);
    nordstromMap.addEdge(B_1, D_4);
    nordstromMap.addEdge(B_1, AD_4);
    nordstromMap.addEdge(B_1, C_4);
    nordstromMap.addEdge(B_1, BC_4);
    nordstromMap.addEdge(B_1, CD_5);
    nordstromMap.addEdge(B_1, C_5);
    nordstromMap.addEdge(B_1, BC_5);
    nordstromMap.addEdge(B_1, CD_6);
    nordstromMap.addEdge(B_1, D_6);
    nordstromMap.addEdge(B_1, FIT);
    
    nordstromMap.addEdge(AB_1, H_04);
    nordstromMap.addEdge(AB_1, H_02);
    nordstromMap.addEdge(AB_1, H_01);
    nordstromMap.addEdge(AB_1, H_00);
    nordstromMap.addEdge(AB_1, CD_4);
    nordstromMap.addEdge(AB_1, D_4);
    nordstromMap.addEdge(AB_1, AD_4);
    nordstromMap.addEdge(AB_1, C_4);
    nordstromMap.addEdge(AB_1, BC_4);
    nordstromMap.addEdge(AB_1, CD_5);
    nordstromMap.addEdge(AB_1, C_5);
    nordstromMap.addEdge(AB_1, BC_5);
    nordstromMap.addEdge(AB_1, CD_6);
    nordstromMap.addEdge(AB_1, D_6);
    nordstromMap.addEdge(AB_1, FIT);
    nordstromMap.addEdge(AB_2, A_6);
    nordstromMap.addEdge(AB_2, AB_6);

    nordstromMap.addEdge(BC_2, H_03);
    nordstromMap.addEdge(BC_2, H_02);
    nordstromMap.addEdge(BC_2, H_01);
    nordstromMap.addEdge(BC_2, H_00);
    nordstromMap.addEdge(BC_2, CD_4);
    nordstromMap.addEdge(BC_2, D_4);
    nordstromMap.addEdge(BC_2, AD_4);
    nordstromMap.addEdge(BC_2, C_4);
    nordstromMap.addEdge(BC_2, BC_4);
    nordstromMap.addEdge(BC_2, CD_5);
    nordstromMap.addEdge(BC_2, C_5);
    nordstromMap.addEdge(BC_2, BC_5);
    nordstromMap.addEdge(BC_2, CD_6);
    nordstromMap.addEdge(BC_2, AD_6);
    nordstromMap.addEdge(BC_2, FIT);
    nordstromMap.addEdge(BC_2, A_6);
    nordstromMap.addEdge(BC_2, AB_6);

    nordstromMap.addEdge(B_2, H_03);
    nordstromMap.addEdge(B_2, H_02);
    nordstromMap.addEdge(B_2, H_04);
    nordstromMap.addEdge(B_2, H_05);
    nordstromMap.addEdge(B_2, H_00);
    nordstromMap.addEdge(B_2, CD_4);
    nordstromMap.addEdge(B_2, D_4);
    nordstromMap.addEdge(B_2, AD_4);
    nordstromMap.addEdge(B_2, C_4);
    nordstromMap.addEdge(B_2, BC_4);
    nordstromMap.addEdge(B_2, CD_5);
    nordstromMap.addEdge(B_2, C_5);
    nordstromMap.addEdge(B_2, BC_5);
    nordstromMap.addEdge(B_2, CD_6);
    nordstromMap.addEdge(B_2, AD_6);
    nordstromMap.addEdge(B_2, A_6);
    nordstromMap.addEdge(B_2, AB_6);

    nordstromMap.addEdge(AB_2, H_03);
    nordstromMap.addEdge(AB_2, H_02);
    nordstromMap.addEdge(AB_2, H_04);
    nordstromMap.addEdge(AB_2, H_05);
    nordstromMap.addEdge(AB_2, H_01);
    nordstromMap.addEdge(AB_2, CD_4);
    nordstromMap.addEdge(AB_2, D_4);
    nordstromMap.addEdge(AB_2, AD_4);
    nordstromMap.addEdge(AB_2, C_4);
    nordstromMap.addEdge(AB_2, BC_4);
    nordstromMap.addEdge(AB_2, CD_5);
    nordstromMap.addEdge(AB_2, C_5);
    nordstromMap.addEdge(AB_2, BC_5);
    nordstromMap.addEdge(AB_2, CD_6);
    nordstromMap.addEdge(AB_2, AD_6);
    nordstromMap.addEdge(AB_2, A_6);
    nordstromMap.addEdge(AB_2, AB_6);
    
    nordstromMap.addEdge(BC_3, H_03);
    nordstromMap.addEdge(BC_3, H_02);
    nordstromMap.addEdge(BC_3, H_04);
    nordstromMap.addEdge(BC_3, H_05);
    nordstromMap.addEdge(BC_3, H_01);
    nordstromMap.addEdge(BC_3, D_4);
    nordstromMap.addEdge(BC_3, CD_6);
    nordstromMap.addEdge(BC_3, AD_6);
    nordstromMap.addEdge(BC_3, A_6);
    nordstromMap.addEdge(BC_3, AB_6);

}
