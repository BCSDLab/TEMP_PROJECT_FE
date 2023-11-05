const shopsResultData = [
  {
    placeId: 'ChIJH3rMhQaDZTURBHR2ZvybrdM',
    name: '지례식육점',
    formattedAddress: '대한민국 김천시',
    lat: 35.9866338,
    lng: 128.0283291,
    openNow: false,
    totalRating: -8,
    ratingCount: 1,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuFKN1y7hsuprUAT1QQ5xEGrmr5IC1KWnnfyxjzr3Q-K2Niv1xK9fAmY7SBmiKcBeCCN4xqfd_nZWqMWRAphKk-s3obT4EXROQc9txPzmRPtbRxLTM3JTnMbZHcjZPDrWrUZ7jgJ-_UtFWPRwLCsMfQ5VrtXpncfj_lFB6IFdHi0BRfM&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2950.218415564871,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJMa61vgWDZTUROYpvXhN2Ous',
    name: '원조지례삼거리불고기',
    formattedAddress: '대한민국 경상북도 김천시 지례면',
    lat: 35.9877726,
    lng: 128.0295511,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGLwG_-cMMTCZ8x8TTgl2QQTJ8YWOIE21nhe0EuzAuG_p_ILNnsg3WvNpp2AymRsSUVSxWCbBeIeWCgB8yI4IG8cn4RX62SFbtDq4zd7GeeJcROsGk2C2ToE50AX-wkUZdWoIWanqxG9fuYx_93nFQPxD5gaUoTf4bh02hwak5b-pYw&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2985.92963601165,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJk5vw5QaDZTURQ2tqK-eOQd0',
    name: '황가네석쇠불고기',
    formattedAddress: '대한민국 경상북도 김천시 지례면',
    lat: 35.98546839999999,
    lng: 128.0278046,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuEFS8rQ-MsdORBzAVEkB6Zefyb4LJu61GnAST88fuxfEgk8CQJvNQTgsvC_CP3HuTG_fwitIb83G60tZGWRzBS--5NIRLLuVPA86JiZAYdc-yqehnoIqiF15_xxqF5fY6A65NBaHgnXYP8F1rjrxetswl5YKEp2H-FZuvSQMuoFohE9&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2977.8436662562003,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJp_-HCgWDZTURA9v8ceyaTOQ',
    name: '부자가든',
    formattedAddress: '대한민국 김천시',
    lat: 35.9888889,
    lng: 128.03,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuETH1w4i0qT6pRePan7HvH2tPOPITZyqrHp-DBi4t-brqGIcVJoRwlZ8cdDA6k_hKzY26xrkqS_3sCo12edbgTUuOc7tlidYAiBAxOcM6iE4lfvs-3OSzom8iI1WQmNxywZAlWFHQoKxSwiTr4lZXRauZOdSLPV-lTBJATtOVsoF8c0&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2968.1519180345217,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJsZDAQAaDZTURlPx2J74d6IQ',
    name: '대자연한우',
    formattedAddress: '대한민국 김천시',
    lat: 35.9851618,
    lng: 128.0299401,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuEoHYaNnIItPFLiS4Zk5DQxBVtKCF1R4ONQkELbTcfQdP9dhARgBkuI_0L7yDJgOyjFKF434w2jOSow4PVBTLc5cy26Go0bw9MOyf2Xwt2XuT8g_YXsoKTzgyi-HqPC4164VsMCNM9KZHc8KBCNACguNFkqhKyjFMJWrMwv9gSQRiQ&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 3158.626108534662,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJt45Id6mDZTURnyEFu_CCqr8',
    name: '대밭가든',
    formattedAddress: '대한민국 김천시',
    lat: 35.9804401,
    lng: 128.0266905,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuF0yHNnopncTihfuasyEGGt0GpQX1FhowgkgYymPXeROkG6qXQ0XDstKZldbN4tOA4XWPWLCAyfGD9CfrEndzn0z6x1aU2DgJ2ZFjxVmOFjHR9dnpXBAziTcGE_nNvSPkgxxP6O1w9LvKMptwwNKD9NUJ0-lUFIyK5Zu0G5RX6z-QCQ&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 3239.732869431899,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ2XWsVvx_ZTURMNAYR4wPYms',
    name: '중원깜돈',
    formattedAddress: '대한민국 경상북도 김천시 대덕면',
    lat: 35.9191966,
    lng: 127.9713554,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuEfSSs5Y5ik_dGu_yeLFTZaBYt1SBF-hKW3mbZku0RyNGTDEl4dnP5REaWMDKe6gtHqkSJQufeCB676DXChhXqC7P9J-d-OvRwggY2IRhmeMzxDx58yOEkLk2MjJpuBNBr8OOe3zp2kIIQ6sxRMwlX2ro3ufm0VsWtVy4Rk1y_LYH3Q&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 9347.051217557579,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ32z2G-2YZTURPWC9BMEoRJE',
    name: '고기AND찌개',
    formattedAddress: '대한민국 김천시',
    lat: 36.1247531,
    lng: 128.0925682,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 16175.257164990271,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJZfLIhIuYZTURFnWh1Ryyj5o',
    name: '한돈참숯꼬기 부곡점',
    formattedAddress: '대한민국 경상북도 김천시 부곡중앙1길',
    lat: 36.1258938,
    lng: 128.1007884,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuFQfDSy-pa6U05a91VeaQLj5PijCn-Gkf5xb5W565w78CxW1H9maAedB9xi8q12mx5r1Zgn1Z3DrnaFJZezjPzy6pKexvBzH0zQaS2HMX4ul92wFRtbSps77XCG_hdDb8ULSBhkisQBfvpOwAEks-jNuG0cT6GVPhKhVLIk-Kg-4h5s&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 16673.73563152032,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJnc0PAu2YZTURTk0higjTauw',
    name: '김해본가뒷고기',
    formattedAddress: '대한민국 경상북도 김천시 부곡동',
    lat: 36.1243856,
    lng: 128.0922723,
    openNow: null,
    totalRating: 0,
    ratingCount: 0,
    photoToken: null,
    dist: 16126.544723828292,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJdRlB-HeYZTUR7LtTKZggvKo',
    name: '한강고기집',
    formattedAddress: '대한민국 경상북도 김천시 신음동',
    lat: 36.1355878,
    lng: 128.1161184,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 18335.803449627467,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJU1VVPvyXZTUR09AzAt74MS4',
    name: '숯불이야기',
    formattedAddress: '대한민국 경상북도 김천시 덕곡동',
    lat: 36.1185161,
    lng: 128.1541654,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuHf8pL7t8GrrBUSfxl_9v7XOHOgrHqCW_tLwMMKiVbsAo0MM9zVupE5fjtf_HSmczKFBbBs6ZXudusQtQ_n3YmR7UEgee4sxIa2bKVhDoP-gsJ3aZHizgIDp1JyemAvxp8Amz2iw7ctBQaoGOAeTKVEVroV1iwSsi0eoFbjobA6iQTU&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 19122.779904536936,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ6yItGWSYZTURjrHTtiRlTC4',
    name: '수입고기전문점',
    formattedAddress: '대한민국 김천시',
    lat: 36.1240075,
    lng: 128.1118587,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 17064.764044369047,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ56rbvAOYZTURFfPLJQI2Ptc',
    name: '김해본가뒷고기 지좌점',
    formattedAddress: '대한민국 경상북도 김천시 지좌동',
    lat: 36.1193559,
    lng: 128.1439417,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuHLXEqwlfFM0ALsF502ZX0r4xE0PANsouw0QOyRUe7rxK0G9aq9BKkcX7VpwO3hfEqFRgTf0Q74lIiTxIfAGkPnfiBwSczqf8AA9ALPiEEe88aPd9mOU82nBMeHLau6eQvPWjAosCyJ5LNEb1-ha5o36IRIvahSWQF7-iVbPnVSeiD2&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 18534.400443150735,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJd00px8yGZTURZ_r4J_s0xf8',
    name: '우정식당',
    formattedAddress: '대한민국 성주군',
    lat: 35.907092,
    lng: 128.0641138,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 11832.928704408296,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ-XCZcOyYZTURm2zdHyjhhyw',
    name: '고기를굽다',
    formattedAddress: '대한민국 경상북도 김천시 부곡동',
    lat: 36.1242756,
    lng: 128.0900192,
    openNow: null,
    totalRating: -2,
    ratingCount: 0,
    photoToken: null,
    dist: 16012.781141719877,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJp3ORcIqYZTURDCkEs-NGsms',
    name: '고기요',
    formattedAddress: '대한민국 부곡동',
    lat: 36.1245761,
    lng: 128.1050072,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 16761.524614356702,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ8-YoiXeYZTUR_PvGuXG9gU0',
    name: '두껍삼 김천신음점',
    formattedAddress: '대한민국 경상북도 김천시 신음동',
    lat: 36.134424,
    lng: 128.1163189,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGiqiZprcIA4reSi5xwldkFemHYSVvDy36Aj9DIm4ds5gSmDd_XtMEkxrkl5Lpib_6lUuXUS7JIfNYWuTtGEQC-CKkWlusdn-oRwwwpFw8dzHIRKp6QMnOOzeJTq_we6oGXDRAduMabQsxrWzijyduCcnAenuOGkxYpwEmtO_WFLgIE&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 18239.922702673728,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJZ4cOKnCYZTURGoxCXbgTvIA',
    name: '고집불통한우촌',
    formattedAddress: '대한민국 경상북도 김천시 성내동',
    lat: 36.1259521,
    lng: 128.1183722,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 17587.72629916733,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJ70OggHeYZTUR2_oBh2_BKx8',
    name: '안가 뒷고기',
    formattedAddress: '대한민국 김천시',
    lat: 36.1340168,
    lng: 128.1160276,
    openNow: null,
    totalRating: -3,
    ratingCount: 0,
    photoToken: null,
    dist: 18187.83124804028,
    category: 'restaurant',
  },
  {
    placeId: 'ChIJo6Hf4k2CZTUR8E7hnG483tk',
    name: '산내들카페',
    formattedAddress: '대한민국 지례면',
    lat: 35.9771001,
    lng: 128.0156817,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuFNmb7074cFAtE81zYqPrm2XG49-wKcaodSm5Ht7ssqNOo9daeXzEv4RXGxnJq4oU-K_I2yIeaPqmfV2LmiABplAwUmWMm9LEQa2jbSCQ9-dJkEF28pIfK_ZLj2YJ6f-j3LxujY4soputPsJIVp6lavah-a2yquV7JXpB1zQS4CH2Je&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2910.9721627423683,
    category: 'cafe',
  },
  {
    placeId: 'ChIJ11frtwWDZTURAlEZBeb8LNI',
    name: '커피드링킹',
    formattedAddress: '대한민국 지례면',
    lat: 35.9879043,
    lng: 128.0293536,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuHcgKmwc1xKjikVkGSaNRg5nFkKCdaGxwTFPCAl7ATtOAIgJR09WI9_3KastlOQ672ZFp9FMS4KtGjbPUUle42e4S1xRHosTnuSKB72J5LOecHUFEImzK7_aufw1BQQ1hD6mnNKivdwYokzjLqwOREUn0a_tJQLSgB0I65tAW2IlRWW&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 2963.4454745492394,
    category: 'cafe',
  },
  {
    placeId: 'ChIJv78Inm2HZTURRWYQkt-VCp0',
    name: 'Cafe B2iN',
    formattedAddress: '대한민국 경상북도 성주군 금수면',
    lat: 35.9185138,
    lng: 128.0802197,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 11585.208583514426,
    category: 'cafe',
  },
  {
    placeId: 'ChIJYWAVAFOBZTURBzbBRWCL_rE',
    name: '커피맛있는집',
    formattedAddress: '대한민국 경상북도 김천시 대덕면',
    lat: 35.896745,
    lng: 127.984883,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuE46mRttGQOP6v_YfmLoXsvJ3idZjZY-3Ifw_4PvJnk_s7coYvgEBPjCr14px7J5n4_JenpPdbF3BjlP4QNn2Y6RlYSfZL1JtRiFk_qvqjszkkPbLhrlWNODujKPE-QR9E46G0IXpBSucklL8lSP4_8pOxqpe8XBgQEuKFU2P7QLYd0&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 11561.236101508517,
    category: 'cafe',
  },
  {
    placeId: 'ChIJ4y4PR6qfZTURDmHTEywfr0U',
    name: '카페테바',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.11445810000001,
    lng: 128.0160954,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 12808.522180443404,
    category: 'cafe',
  },
  {
    placeId: 'ChIJB34z6PeeZTURM6MMAbUvDx0',
    name: '331로스터리카페',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1236262,
    lng: 128.021638,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuEclQj7WIbORypi62I4sDFHaUkaeikMkQ7-oMChD-O2N-y32y0-E3V74ze3k7zTpSHAE8FP0mXEC1LTKeXW7SHmude7agNyalz_FEC2p64zvGg4WicJjv43UZUs00iNGwXt-DNz0GTXlXPk9C_wGR_nUCqBnudwnvkJh7e_2pPXtltC&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 13882.8543943052,
    category: 'cafe',
  },
  {
    placeId: 'ChIJzZyj60uZZTURl9nLZUZo_Yk',
    name: '마지카페',
    formattedAddress: '대한민국 경상북도 김천시 부곡맛고을2길',
    lat: 36.1254554,
    lng: 128.1064593,
    openNow: true,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 16915.867178597684,
    category: 'cafe',
  },
  {
    placeId: 'ChIJq7K7bjqfZTURBH3IEBAlq4o',
    name: '카페 밀',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1204791,
    lng: 128.0062369,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuHI3A3wE3xTsY5HnToqMFoDcuHXtVlaujY5miZHPJxmbUaBcmjW7qslWzBXAO5n8xcW3nyHyhSqNYJDnAPVUBZgl9f3g7SvviAy_tNBHGRepFs8tEmVmX_hU483_m4swwNwG1mFFfHea5MDm-xe6wyP6Je6__5y5vbhcdv9Cib6_oH2&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 13407.745369322938,
    category: 'cafe',
  },
  {
    placeId: 'ChIJU7aOKS-EZTURX521SJPVgbw',
    name: '성주카페아비앙또',
    formattedAddress: '대한민국 경상북도 성주군 금수면',
    lat: 35.9243137,
    lng: 128.0974116,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGM_ZD-IeyIlPk1mLU7uANWctYBesBf-XLk3YaYUjbC2WMejZBzwaMsA_LR9KZu8-XvYk-_KHn0V3xRDFYBUPbKyYO96LTGqqaKXoNZ5d6uFIQ1hEJ8I9JiuvYLWw8yxbhKHFRVSWOdl2NkTKkQDi67eN53BR8oImNRJw6RMLFS0VZG&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 12152.271307116065,
    category: 'cafe',
  },
  {
    placeId: 'ChIJCZVf_V6eZTUR3oLAAJ3ZEaQ',
    name: '황악산아래 카페',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1195771,
    lng: 128.0181639,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuERJ1CE7TcCp6qBtQgZzNuUK1amKEolxPFmi5xbQGQc1c7Dz5ftySxds6leDuEf94IWWKXykVlefaCfuvnuxsC9dnBiAxxTPb0t_Pfwh9YApPzrc6sA7TjMy1665Tc3Hh5XcUq2ZQoPuk8tyyg9KLc5qn7hFXoKtfSFT6JmOraIcKJJ&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 13395.596434856632,
    category: 'cafe',
  },
  {
    placeId: 'ChIJBbMy-2CeZTUR9hn-VJkMfVk',
    name: '베이커리카페',
    formattedAddress: '대한민국 대항면',
    lat: 36.1150446,
    lng: 128.0175075,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 12888.20163237102,
    category: 'cafe',
  },
  {
    placeId: 'ChIJObqwZgqfZTUR8k7ddUL8zxY',
    name: '카페아하바',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1315568,
    lng: 128.0410929,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGPkdaYZM5rADMuQoFhuL-abDO_Axp2hRK16hNghaW830Avgv5lcvY5MHytH6UjJ7ZYJB2bwhRWF9T47Cm9v4rACApJWYwdifNUNV7XVCrRkej6MC9aRR5S_dr-JpS2DG7gcj7gUeBYME4ZFIej2v5z-IJ0q7Y5FGoC7VLoAFryzz46&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 15086.81799953743,
    category: 'cafe',
  },
  {
    placeId: 'ChIJW09B-A-jZTUR2YcCdfXccPk',
    name: '투썸플레이스 김천신음점',
    formattedAddress: '대한민국 경상북도 김천시 신음동',
    lat: 36.1369771,
    lng: 128.1173581,
    openNow: true,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuFUmGS-73YiQZfQReBEnSfHRsKgLlNFdkTO_zjWyEKywZhuiW1VckLhGxuQYEAqITFOyBtyu0qQOcZKTDPNopWaC472oCeREyfCYMoONwJs3MQpbhAHbAvKKWQk9nnqCdRKOSvBoORzWmQUUUu9wvXWvuJPDu5gaiFiJflCT4qNIylq&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 18526.18079372853,
    category: 'cafe',
  },
  {
    placeId: 'ChIJAQDHvl-eZTURob1mkw0gg_0',
    name: '피터팬카페',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1177164,
    lng: 128.0192128,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGt2ak6rRfFmwSvKUWNdSl4HvnDsa1tbm-A8SCPGNSql1NLB2QYHlbPF1UU1Icti91zRg0MnyFaGJXjKlAlW1RV51lbTWmZQc2karFu_KRwIXmjs6NNEX-6IIyZdL8R29DTkv-9v35yu0c3Azy32vdsSkNphgTIjwdo5Ho7t0t7uHFS&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 13202.276768648504,
    category: 'cafe',
  },
  {
    placeId: 'ChIJ5R54HAyfZTURVP25vHNGxcQ',
    name: 'Tzu-Yu is From R.O.C beauty Coffee and Tea Stop.',
    formattedAddress: '대한민국 경상북도 김천시',
    lat: 36.1451416,
    lng: 128.0208985,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 16247.157099054024,
    category: 'cafe',
  },
  {
    placeId: 'ChIJnZxFIT6AZTURsnP6ow70IrQ',
    name: '가릇재',
    formattedAddress: '대한민국 경상북도 김천시 대덕면',
    lat: 35.9012584,
    lng: 127.9959556,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuHF7xNYaHlsbYpBjVxnHWgRiiONpgdpDbqSmv9FJ8I5lHlZZK-XzF3pFZ5SQhAXmfI5bBn01EBdgA09dhM5ADBepESU8Lgry5brKswPfPyVKZEIDny5NmAGJm9hJjGdvbulTfssD93NOBrurFaxZtiMtUO7Z1BJ4GKoe7FTtsW2XWn9&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 10985.070396455447,
    category: 'cafe',
  },
  {
    placeId: 'ChIJrcrXmP2eZTURd5XOxki1h2c',
    name: '카페우연히봄',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1305367,
    lng: 128.0283923,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 14736.948384863623,
    category: 'cafe',
  },
  {
    placeId: 'ChIJmXChCvifZTURD-Q9JTuDfWs',
    name: '카페 덕전 887',
    formattedAddress: '대한민국 경상북도 김천시 대항면',
    lat: 36.1227472,
    lng: 128.0470966,
    openNow: false,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuE2jsHNokImilMmA8LlKLbzYj1LMJJLAgeYbPaav7HKc6F_V1UiJYaPATaHaZAq2mvMc5BUELMmv6XZXOhyMyusjTOkJqR8Km8cIJRP-OydIGvTksqOcjzwysGR17w3TFV3NJ3x13XUGSKKdq6ny8TG6kbuRtUH-MYyLe_KJfAEPpvm&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 14289.643787172714,
    category: 'cafe',
  },
  {
    placeId: 'ChIJH5PKl2N7ZTURWgBYOyeYCC4',
    name: '금자다리 카페',
    formattedAddress: '대한민국 충청북도 영동군 용화면',
    lat: 36.0463553,
    lng: 127.8147179,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: null,
    dist: 17441.004277468055,
    category: 'cafe',
  },
  {
    placeId: 'ChIJp0ZFIkiBZTURM3T4wEKbxbo',
    name: '옥류동계곡',
    formattedAddress: '대한민국 경상북도 김천시 증산면',
    lat: 35.8985499,
    lng: 128.0402674,
    openNow: null,
    totalRating: null,
    ratingCount: null,
    photoToken: 'https://maps.googleapis.com/maps/api/place/photo?photo_reference=AcJnMuGZlwoMrtfT1L-nfoHiW-sitjCIcC2lHG8k0UvqLqxVd6U3HK5gpVLt6luN5ecBhJ8a5KtLe0rv70WxcrFpdKQnB0gSDG6wzBL01JdQRdBwlFfUiMHg04DQcdXQ57QL2UEh93xMUu-D2hIz1b0DWINsWYpihp-y7D_0Yoj7_miB0EOL&key=AIzaSyDxxUkBkujFvAJbrpndyIcyNMY2Nie5w28&maxwidth=400&maxheight=400',
    dist: 11848.212608286914,
    category: 'cafe',
  },
];

export default shopsResultData;
