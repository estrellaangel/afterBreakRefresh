let input = 
`1399, 830 , 706 , 1241, 1440, 1539, 1279, 1168, 1402, 1591 
1113, 1401, 403 , 513 , 1196, 813 , 1105, 659 , 1533, 1134 
1275, 1363, 764 , 1225, 1080, 1351, 709 , 875 , 1549, 1441 
712 , 1189, 447 , 1584, 719 , 1069, 1316, 1083, 1406, 1133 
1260, 1555, 1509, 1490, 1302, 1442, 1040, 1593, 662 , 1481 
903 , 1287, 1078, 1098, 1573, 812 , 1143, 1154, 965 , 864  
853 , 702 , 1029, 761 , 932 , 1117, 1273, 1551, 1207, 1456 
936 , 1101, 1202, 491 , 816 , 784 , 1125, 587 , 715 , 1233 
446 , 1313, 1449, 1419, 832 , 1113, 1389, 708 , 894 , 966  
1018, 1455, 1569, 789 , 991 , 953 , 764 , 1269, 1305, 1281 
683 , 714 , 893 , 1029, 1002, 1099, 1387, 1475, 1168, 703  
832 , 440 , 1000, 1453, 1124, 1501, 708 , 750 , 875 , 1506 
1544, 1013, 542 , 635 , 1135, 779 , 1561, 735 , 952 , 1529 
1472, 1222, 722 , 1088, 578 , 1235, 869 , 1579, 1170, 890  
1393, 1287, 1420, 1481, 1282, 1161, 1265, 938 , 956 , 1051 
1090, 1163, 753 , 737 , 799 , 962 , 1162, 1058, 1321, 1238
416 , 782 , 765 , 1352, 910 , 1044, 1103, 1424, 792 , 835  
1136, 410 , 1257, 942 , 882 , 1459, 1345, 1534, 437 , 1509
1285, 1404, 493 , 1225, 767 , 1484, 516 , 1069, 938 , 874 
599 , 1461, 1159, 1531, 490 , 1467, 725 , 746 , 602 , 478 
1371, 892 , 1258, 973 , 504 , 787 , 1572, 842 , 574 , 1165 
455 , 901 , 1450, 959 , 1105, 1268, 1087, 658 , 1371, 968  
1201, 1227, 500 , 1139, 983 , 814 , 717 , 936 , 991 , 538  
628 , 574 , 1053, 522 , 476 , 1456, 1591, 767 , 960 , 1060 
573 , 1100, 1370, 561 , 1057, 1308, 465 , 796 , 1352, 1178 
1525, 1187, 1268, 628 , 454 , 414 , 969 , 1593, 1320, 1077 
1527, 448 , 847 , 637 , 1185, 1093, 1208, 1066, 1091, 1549 
1180, 958 , 1461, 503 , 1513, 1479, 1131, 435 , 1149, 1510 
936 , 1388, 1533, 433 , 974 , 965 , 950 , 677 , 871 , 1253 
1216, 750 , 1159, 1058, 1187, 1153, 1434, 844 , 494 , 1180 
1005, 651 , 946 , 939 , 553 , 772 , 1100, 1508, 735 , 1289 
1165, 1495, 949 , 656 , 1570, 1529, 1419, 1202, 1110, 1081 
788 , 729 , 1091, 831 , 1026, 1308, 621 , 1215, 706 , 845  
1524, 1093, 1511, 895 , 1475, 990 , 573 , 1120, 1324, 1258 
1286, 604 , 1081, 1510, 707 , 512 , 1527, 1311, 468 , 1517 
1448, 1388, 403 , 1396, 1043, 837 , 413 , 794 , 1437, 1245 
423 , 602 , 1444, 787 , 1389, 1528, 1310, 1423, 1281, 944  
1518, 1301, 720 , 1277, 595 , 765 , 806 , 834 , 523 , 809  
532 , 1135, 974 , 1564, 1358, 1041, 1138, 1016, 1389, 625  
1457, 429 , 1032, 503 , 806 , 970 , 1484, 756 , 1197, 1588 
945 , 440 , 505 , 1069, 801 , 1035, 1335, 1157, 1085, 734  
1161, 1425, 1418, 532 , 957 , 1017, 1390, 1262, 650 , 705  
1283, 1146, 1118, 1189, 418 , 974 , 999 , 680 , 1192, 1403 
426 , 981 , 1103, 704 , 486 , 1369, 1582, 579 , 1116, 1371 
1469, 873 , 606 , 867 , 856 , 1581, 1165, 515 , 1335, 1018 
1214, 744 , 415 , 595 , 1366, 1208, 1573, 1570, 792 , 460  
615 , 1388, 740 , 405 , 1568, 1301, 417 , 748 , 608 , 1473 
1565, 403 , 767 , 1531, 702 , 671 , 680 , 1156, 920 , 451  
1598, 1247, 634 , 1556, 1449, 1447, 1365, 1573, 1227, 1205 
979 , 1031, 597 , 1154, 931 , 1048, 564 , 1506, 407 , 1105`;

    input = input.split("\n");
    let test = 0;
//QUESTION 1
//#region [pink]
    for(row in input){
        input[row] = input[row].split(",");
        for(col in input[row]){
            input[row][col] = input[row][col].trim();
        }
    }

    //console.table(input);
//#endregion

//QUESTION 2
//#region [pink]
    let difBetweenScores = [];
    for(row in input){
        let highestNum = 0;
        let lowestNum = 1600;
        for(col in input[row]){
            if(Number(input[row][col]) > highestNum){
                highestNum = input[row][col];
            }
            if(Number(input[row][col]) < lowestNum){
                lowestNum = input[row][col];
            }
        }
        difBetweenScores.push(highestNum-lowestNum);
    }
    let total = 0;

    for(i in difBetweenScores){
        total = total + Number(difBetweenScores[i]);
    }

    console.log(total);
//#endregion

//QUESTION 3
//#region [pink]
    let averages = [];
    for(row in input){
        let total = 0;
        for(col in input[row]){
            total = total + Number(input[row][col]);
        }
        total = total/(input[row].length);
        total = total.toFixed(2);
        averages.push(total);
    }

    let avg = 0;
    for(n in averages){
        avg = avg + Number(averages[n])
    }

    // avg = avg/averages.length;
    avg = avg.toFixed(2);
    console.log(`averages = ${avg}`);

//#endregion

//NEXT LEVEL 1
//#region [pink]
    let averages = [];
    for(row in input){
        let total = 0;
        for(col in input[row]){
            total = total + Number(input[row][col]);
        }
        total = total/(input[row].length);
        total = total.toFixed(2);
        averages.push(total);
    }
    console.log(averages);
    let big = 0;
    for(num1 in averages){
        if(averages[num1] > big){
            big = big - big;
            big = big + Number(averages[num1]);
        }
    }
    let smol = 1600;
    for(num2 in averages){
        if(averages[num2] < smol){
            smol = smol - smol;
            smol = smol + Number(averages[num2]);
        }
    }


    let range = big - smol;
    console.log(averages[48]);
    for(num in averages){
        let innerRange = averages[num] - smol;
        let percent = innerRange/range;
        if(percent > 0){
            percent *= .5;
            percent += .5;
            percent *100;
            percent*= 100;
            percent = percent.toFixed(2);
            averages[num] = `${percent}%`;
        }else{
            averages[num] = `50.00%`
        }

    }

    console.table(averages);
//#endregion

//NEXT LEVEL 2
    let newTab = input;
    for(row in input){
        for(column in input){
            let percentile = 0;
            let peopleBetter = 0;
            let peopleWorse = 0;
                    for(innerRow in input){
                        for(innerCol in input){
                            if(Number(input[innerRow][innerCol]) > Number(input[row][column])){
                                peopleBetter++;
                            }else if(Number(input[innerRow][innerCol]) < Number(input[row][column])){
                                peopleWorse++;
                            }
                        }
                    }
            let tot = peopleWorse + peopleBetter + 1;
            percentile = peopleWorse/tot;
            percentile *= 100;
            percentile = percentile.toFixed(2);
            newTab[row][column] = `${percentile}%`;
            if (column >= 9){
                break;
            }
        }
    }

console.table(newTab);