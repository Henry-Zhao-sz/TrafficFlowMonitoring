/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : aviation

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 03/03/2022 20:07:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cargothroughout
-- ----------------------------
DROP TABLE IF EXISTS `cargothroughout`;
CREATE TABLE `cargothroughout`  (
  `area` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `cargoThrough` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cargothroughout
-- ----------------------------
INSERT INTO `cargothroughout` VALUES ('东部地区', 1, 115.3);
INSERT INTO `cargothroughout` VALUES ('中部地区', 1, 14.6);
INSERT INTO `cargothroughout` VALUES ('西部地区', 1, 24.1);
INSERT INTO `cargothroughout` VALUES ('东北地区', 1, 4.4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 2, 83.1);
INSERT INTO `cargothroughout` VALUES ('中部地区', 2, 9.5);
INSERT INTO `cargothroughout` VALUES ('西部地区', 2, 15.6);
INSERT INTO `cargothroughout` VALUES ('东北地区', 2, 3);
INSERT INTO `cargothroughout` VALUES ('东部地区', 3, 115.1);
INSERT INTO `cargothroughout` VALUES ('中部地区', 3, 13.7);
INSERT INTO `cargothroughout` VALUES ('西部地区', 3, 21.7);
INSERT INTO `cargothroughout` VALUES ('东北地区', 3, 4.4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 4, 115.7);
INSERT INTO `cargothroughout` VALUES ('中部地区', 4, 14);
INSERT INTO `cargothroughout` VALUES ('西部地区', 4, 22.9);
INSERT INTO `cargothroughout` VALUES ('东北地区', 4, 4.4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 5, 116);
INSERT INTO `cargothroughout` VALUES ('中部地区', 5, 14.1);
INSERT INTO `cargothroughout` VALUES ('西部地区', 5, 25.2);
INSERT INTO `cargothroughout` VALUES ('东北地区', 5, 4.5);
INSERT INTO `cargothroughout` VALUES ('东部地区', 6, 112.9);
INSERT INTO `cargothroughout` VALUES ('中部地区', 6, 12.9);
INSERT INTO `cargothroughout` VALUES ('西部地区', 6, 24.7);
INSERT INTO `cargothroughout` VALUES ('东北地区', 6, 4.8);
INSERT INTO `cargothroughout` VALUES ('东部地区', 7, 106.2);
INSERT INTO `cargothroughout` VALUES ('中部地区', 7, 12.3);
INSERT INTO `cargothroughout` VALUES ('西部地区', 7, 24.4);
INSERT INTO `cargothroughout` VALUES ('东北地区', 7, 4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 8, 96.8);
INSERT INTO `cargothroughout` VALUES ('中部地区', 8, 11.6);
INSERT INTO `cargothroughout` VALUES ('西部地区', 8, 21.2);
INSERT INTO `cargothroughout` VALUES ('东北地区', 8, 4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 9, 104.3);
INSERT INTO `cargothroughout` VALUES ('中部地区', 9, 14.4);
INSERT INTO `cargothroughout` VALUES ('西部地区', 9, 25);
INSERT INTO `cargothroughout` VALUES ('东北地区', 9, 5.4);
INSERT INTO `cargothroughout` VALUES ('东部地区', 10, 108.8);
INSERT INTO `cargothroughout` VALUES ('中部地区', 10, 13.5);
INSERT INTO `cargothroughout` VALUES ('西部地区', 10, 23.3);
INSERT INTO `cargothroughout` VALUES ('东北地区', 10, 4.6);
INSERT INTO `cargothroughout` VALUES ('东部地区', 11, 110.4);
INSERT INTO `cargothroughout` VALUES ('中部地区', 11, 13.8);
INSERT INTO `cargothroughout` VALUES ('西部地区', 11, 20.7);
INSERT INTO `cargothroughout` VALUES ('东北地区', 11, 4.3);
INSERT INTO `cargothroughout` VALUES ('东部地区', 12, 120.2);
INSERT INTO `cargothroughout` VALUES ('中部地区', 12, 15.1);
INSERT INTO `cargothroughout` VALUES ('西部地区', 12, 25.9);
INSERT INTO `cargothroughout` VALUES ('东北地区', 12, 5.3);

-- ----------------------------
-- Table structure for cargotrans
-- ----------------------------
DROP TABLE IF EXISTS `cargotrans`;
CREATE TABLE `cargotrans`  (
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `value` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cargotrans
-- ----------------------------
INSERT INTO `cargotrans` VALUES ('国内航线', 1, 44);
INSERT INTO `cargotrans` VALUES ('国际航线', 1, 22.8);
INSERT INTO `cargotrans` VALUES ('国内航线', 2, 27.9);
INSERT INTO `cargotrans` VALUES ('国际航线', 2, 18);
INSERT INTO `cargotrans` VALUES ('国内航线', 3, 40.3);
INSERT INTO `cargotrans` VALUES ('国际航线', 3, 25.1);
INSERT INTO `cargotrans` VALUES ('国内航线', 4, 41.2);
INSERT INTO `cargotrans` VALUES ('国际航线', 4, 24.3);
INSERT INTO `cargotrans` VALUES ('国内航线', 5, 42.7);
INSERT INTO `cargotrans` VALUES ('国际航线', 5, 23.8);
INSERT INTO `cargotrans` VALUES ('国内航线', 6, 40.9);
INSERT INTO `cargotrans` VALUES ('国际航线', 6, 23.2);
INSERT INTO `cargotrans` VALUES ('国内航线', 7, 37.5);
INSERT INTO `cargotrans` VALUES ('国际航线', 7, 21.8);
INSERT INTO `cargotrans` VALUES ('国内航线', 8, 33.2);
INSERT INTO `cargotrans` VALUES ('国际航线', 8, 18.8);
INSERT INTO `cargotrans` VALUES ('国内航线', 9, 41.2);
INSERT INTO `cargotrans` VALUES ('国际航线', 9, 18.7);
INSERT INTO `cargotrans` VALUES ('国内航线', 10, 39);
INSERT INTO `cargotrans` VALUES ('国际航线', 10, 21.3);
INSERT INTO `cargotrans` VALUES ('国内航线', 11, 37.2);
INSERT INTO `cargotrans` VALUES ('国际航线', 11, 23.5);
INSERT INTO `cargotrans` VALUES ('国内航线', 12, 47.3);
INSERT INTO `cargotrans` VALUES ('国际航线', 12, 22.2);

-- ----------------------------
-- Table structure for cargoturnover
-- ----------------------------
DROP TABLE IF EXISTS `cargoturnover`;
CREATE TABLE `cargoturnover`  (
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `value` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cargoturnover
-- ----------------------------
INSERT INTO `cargoturnover` VALUES ('国内航线', 1, 6.6);
INSERT INTO `cargoturnover` VALUES ('国际航线', 1, 17.4);
INSERT INTO `cargoturnover` VALUES ('国内航线', 2, 4.2);
INSERT INTO `cargoturnover` VALUES ('国际航线', 2, 14.4);
INSERT INTO `cargoturnover` VALUES ('国内航线', 3, 6.1);
INSERT INTO `cargoturnover` VALUES ('国际航线', 3, 19.4);
INSERT INTO `cargoturnover` VALUES ('国内航线', 4, 6.2);
INSERT INTO `cargoturnover` VALUES ('国际航线', 4, 18.9);
INSERT INTO `cargoturnover` VALUES ('国内航线', 5, 6.5);
INSERT INTO `cargoturnover` VALUES ('国际航线', 5, 18.8);
INSERT INTO `cargoturnover` VALUES ('国内航线', 6, 6.2);
INSERT INTO `cargoturnover` VALUES ('国际航线', 6, 18.2);
INSERT INTO `cargoturnover` VALUES ('国内航线', 7, 5.7);
INSERT INTO `cargoturnover` VALUES ('国际航线', 7, 16.8);
INSERT INTO `cargoturnover` VALUES ('国内航线', 8, 5.1);
INSERT INTO `cargoturnover` VALUES ('国际航线', 8, 14.6);
INSERT INTO `cargoturnover` VALUES ('国内航线', 9, 6.3);
INSERT INTO `cargoturnover` VALUES ('国际航线', 9, 14.4);
INSERT INTO `cargoturnover` VALUES ('国内航线', 10, 5.9);
INSERT INTO `cargoturnover` VALUES ('国际航线', 10, 16.8);
INSERT INTO `cargoturnover` VALUES ('国内航线', 11, 5.6);
INSERT INTO `cargoturnover` VALUES ('国际航线', 11, 18.4);
INSERT INTO `cargoturnover` VALUES ('国内航线', 12, 7.1);
INSERT INTO `cargoturnover` VALUES ('国际航线', 12, 17);

-- ----------------------------
-- Table structure for passengerthroughout
-- ----------------------------
DROP TABLE IF EXISTS `passengerthroughout`;
CREATE TABLE `passengerthroughout`  (
  `area` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `passThrough` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of passengerthroughout
-- ----------------------------
INSERT INTO `passengerthroughout` VALUES ('东部地区', 1, 2994.6);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 1, 798.5);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 1, 2155.2);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 1, 264.8);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 2, 2305.5);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 2, 652.3);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 2, 1728.6);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 2, 256.8);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 3, 4908.9);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 3, 1215.5);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 3, 3103.1);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 3, 622.7);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 4, 5379);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 4, 1285);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 4, 3193.4);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 4, 667.3);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 5, 5274.6);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 5, 1267.8);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 5, 3342.6);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 5, 623.4);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 6, 3823.1);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 6, 1104.6);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 6, 3028.4);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 6, 560);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 7, 4650.1);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 7, 1305.6);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 7, 3491.2);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 7, 691.6);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 8, 2207);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 8, 469.1);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 8, 1658);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 8, 297.4);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 9, 3519.6);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 9, 918.6);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 9, 2485.5);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 9, 500.7);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 10, 4002.8);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 10, 1008.1);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 10, 2521.2);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 10, 445.9);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 11, 2441.7);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 11, 534.5);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 11, 1235.2);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 11, 209.5);
INSERT INTO `passengerthroughout` VALUES ('东部地区', 12, 4492.4);
INSERT INTO `passengerthroughout` VALUES ('中部地区', 12, 1056.6);
INSERT INTO `passengerthroughout` VALUES ('西部地区', 12, 2625.3);
INSERT INTO `passengerthroughout` VALUES ('东北地区', 12, 544.9);

-- ----------------------------
-- Table structure for passtrans
-- ----------------------------
DROP TABLE IF EXISTS `passtrans`;
CREATE TABLE `passtrans`  (
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `value` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of passtrans
-- ----------------------------
INSERT INTO `passtrans` VALUES ('国内航线', 1, 3003.9);
INSERT INTO `passtrans` VALUES ('国际航线', 1, 14.2);
INSERT INTO `passtrans` VALUES ('国内航线', 2, 2385.8);
INSERT INTO `passtrans` VALUES ('国际航线', 2, 9.1);
INSERT INTO `passtrans` VALUES ('国内航线', 3, 4768.4);
INSERT INTO `passtrans` VALUES ('国际航线', 3, 13.8);
INSERT INTO `passtrans` VALUES ('国内航线', 4, 5095.9);
INSERT INTO `passtrans` VALUES ('国际航线', 4, 13.6);
INSERT INTO `passtrans` VALUES ('国内航线', 5, 5091);
INSERT INTO `passtrans` VALUES ('国际航线', 5, 13);
INSERT INTO `passtrans` VALUES ('国内航线', 6, 4115.5);
INSERT INTO `passtrans` VALUES ('国际航线', 6, 12.1);
INSERT INTO `passtrans` VALUES ('国内航线', 7, 4898.5);
INSERT INTO `passtrans` VALUES ('国际航线', 7, 13.2);
INSERT INTO `passtrans` VALUES ('国内航线', 8, 2226.8);
INSERT INTO `passtrans` VALUES ('国际航线', 8, 13.8);
INSERT INTO `passtrans` VALUES ('国内航线', 9, 3599.3);
INSERT INTO `passtrans` VALUES ('国际航线', 9, 12.3);
INSERT INTO `passtrans` VALUES ('国内航线', 10, 3875.3);
INSERT INTO `passtrans` VALUES ('国际航线', 10, 10.8);
INSERT INTO `passtrans` VALUES ('国内航线', 11, 2141.9);
INSERT INTO `passtrans` VALUES ('国际航线', 11, 10.4);
INSERT INTO `passtrans` VALUES ('国内航线', 12, 4216);
INSERT INTO `passtrans` VALUES ('国际航线', 12, 16.3);

-- ----------------------------
-- Table structure for passturnover
-- ----------------------------
DROP TABLE IF EXISTS `passturnover`;
CREATE TABLE `passturnover`  (
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `value` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of passturnover
-- ----------------------------
INSERT INTO `passturnover` VALUES ('国内航线', 1, 436.6);
INSERT INTO `passturnover` VALUES ('国际航线', 1, 7.9);
INSERT INTO `passturnover` VALUES ('国内航线', 2, 352.3);
INSERT INTO `passturnover` VALUES ('国际航线', 2, 5.3);
INSERT INTO `passturnover` VALUES ('国内航线', 3, 705);
INSERT INTO `passturnover` VALUES ('国际航线', 3, 7.2);
INSERT INTO `passturnover` VALUES ('国内航线', 4, 746.1);
INSERT INTO `passturnover` VALUES ('国际航线', 4, 7.9);
INSERT INTO `passturnover` VALUES ('国内航线', 5, 743.2);
INSERT INTO `passturnover` VALUES ('国际航线', 5, 7.9);
INSERT INTO `passturnover` VALUES ('国内航线', 6, 598.1);
INSERT INTO `passturnover` VALUES ('国际航线', 6, 7.4);
INSERT INTO `passturnover` VALUES ('国内航线', 7, 726.8);
INSERT INTO `passturnover` VALUES ('国际航线', 7, 8.2);
INSERT INTO `passturnover` VALUES ('国内航线', 8, 329);
INSERT INTO `passturnover` VALUES ('国际航线', 8, 9);
INSERT INTO `passturnover` VALUES ('国内航线', 9, 529.8);
INSERT INTO `passturnover` VALUES ('国际航线', 9, 8.3);
INSERT INTO `passturnover` VALUES ('国内航线', 10, 562);
INSERT INTO `passturnover` VALUES ('国际航线', 10, 7.3);
INSERT INTO `passturnover` VALUES ('国内航线', 11, 309.1);
INSERT INTO `passturnover` VALUES ('国际航线', 11, 6.8);
INSERT INTO `passturnover` VALUES ('国内航线', 12, 618.7);
INSERT INTO `passturnover` VALUES ('国际航线', 12, 9.1);

-- ----------------------------
-- Table structure for sortie
-- ----------------------------
DROP TABLE IF EXISTS `sortie`;
CREATE TABLE `sortie`  (
  `area` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `value` double NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sortie
-- ----------------------------
INSERT INTO `sortie` VALUES ('东部地区', 1, 33.2);
INSERT INTO `sortie` VALUES ('中部地区', 1, 12.2);
INSERT INTO `sortie` VALUES ('西部地区', 1, 26.4);
INSERT INTO `sortie` VALUES ('东北地区', 1, 3.2);
INSERT INTO `sortie` VALUES (NULL, NULL, NULL);
INSERT INTO `sortie` VALUES ('东部地区', 2, 24.3);
INSERT INTO `sortie` VALUES ('中部地区', 2, 7.6);
INSERT INTO `sortie` VALUES ('西部地区', 2, 17.9);
INSERT INTO `sortie` VALUES ('东北地区', 2, 2.5);
INSERT INTO `sortie` VALUES ('东部地区', 3, 43);
INSERT INTO `sortie` VALUES ('中部地区', 3, 15.6);
INSERT INTO `sortie` VALUES ('西部地区', 3, 31.9);
INSERT INTO `sortie` VALUES ('东北地区', 3, 5.9);
INSERT INTO `sortie` VALUES ('东部地区', 4, 44.2);
INSERT INTO `sortie` VALUES ('中部地区', 4, 14.8);
INSERT INTO `sortie` VALUES ('西部地区', 4, 33.1);
INSERT INTO `sortie` VALUES ('东北地区', 4, 7);
INSERT INTO `sortie` VALUES ('东部地区', 5, 43.4);
INSERT INTO `sortie` VALUES ('中部地区', 5, 14.5);
INSERT INTO `sortie` VALUES ('西部地区', 5, 34.4);
INSERT INTO `sortie` VALUES ('东北地区', 5, 6.9);
INSERT INTO `sortie` VALUES ('东部地区', 6, 33.2);
INSERT INTO `sortie` VALUES ('中部地区', 6, 13.1);
INSERT INTO `sortie` VALUES ('西部地区', 6, 29.3);
INSERT INTO `sortie` VALUES ('东北地区', 6, 5);
INSERT INTO `sortie` VALUES ('东部地区', 7, 38.4);
INSERT INTO `sortie` VALUES ('中部地区', 7, 14.4);
INSERT INTO `sortie` VALUES ('西部地区', 7, 35.4);
INSERT INTO `sortie` VALUES ('东北地区', 7, 6.9);
INSERT INTO `sortie` VALUES ('东部地区', 8, 25.9);
INSERT INTO `sortie` VALUES ('中部地区', 8, 9.4);
INSERT INTO `sortie` VALUES ('西部地区', 8, 25.9);
INSERT INTO `sortie` VALUES ('东北地区', 8, 5.6);
INSERT INTO `sortie` VALUES ('东部地区', 9, 34.3);
INSERT INTO `sortie` VALUES ('中部地区', 9, 13.8);
INSERT INTO `sortie` VALUES ('西部地区', 9, 29.7);
INSERT INTO `sortie` VALUES ('东北地区', 9, 5.8);
INSERT INTO `sortie` VALUES ('东部地区', 10, 37.7);
INSERT INTO `sortie` VALUES ('中部地区', 10, 13.8);
INSERT INTO `sortie` VALUES ('西部地区', 10, 29.6);
INSERT INTO `sortie` VALUES ('东北地区', 10, 5.8);
INSERT INTO `sortie` VALUES ('东部地区', 11, 28.2);
INSERT INTO `sortie` VALUES ('中部地区', 11, 10.2);
INSERT INTO `sortie` VALUES ('西部地区', 11, 22.5);
INSERT INTO `sortie` VALUES ('东北地区', 11, 3.5);
INSERT INTO `sortie` VALUES ('东部地区', 12, 42.3);
INSERT INTO `sortie` VALUES ('中部地区', 12, 14.1);
INSERT INTO `sortie` VALUES ('西部地区', 12, 30.3);
INSERT INTO `sortie` VALUES ('东北地区', 12, 6);

SET FOREIGN_KEY_CHECKS = 1;
