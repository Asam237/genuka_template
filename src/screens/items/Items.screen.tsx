import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { AppLayout } from "../layout/app.layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyText } from "../../components/myText/MyText.component";
import { Publicity } from "../../components/publicity/Publicity.component";
import { PUBLICITY } from "../../services/publicity.services";
import { Product } from "../../components/product/Product.component";
import { PRODUCTS } from "../../scripts/products";

export const Items = (navigation: any) => {
  const [d, setD]: any = useState([]);

  const toDetail = async (value?: number) => {
    navigation.navigation.navigate("detailCoffee", (await d) ? [value] : null);
  };

  useEffect(() => {
    setD(PRODUCTS);
  });

  return (
    <AppLayout>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.container__header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesomeIcon
              icon={faBars}
              size={20}
              style={{ color: COLORS.black }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <FontAwesomeIcon
              icon={faSearch}
              size={20}
              style={{ color: COLORS.black }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container__header__name}>
          <MyText
            variant="title"
            myColor={COLORS.black}
            myFontWeight="bold"
            myText="Hello Abba Sali"
            fontSize={20}
            marginVertical={2}
          />
          <MyText
            fontSize={14}
            variant="subTitle"
            myColor="#504C47"
            myText="Lets gets somethings?"
          />
        </View>
        <View>
          <FlatList
            horizontal={false}
            numColumns={1}
            data={PUBLICITY}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => toDetail(index)}>
                <Publicity props={item} />
              </TouchableOpacity>
            )}
          />
          <View
            style={[styles.container__header, { marginTop: SPACING.xlarge }]}
          >
            <TouchableOpacity onPress={() => null}>
              <MyText
                fontSize={14}
                variant="subTitle"
                myColor="#504C47"
                myText="Top Categories"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => null}>
              <MyText
                fontSize={12}
                variant="subTitle"
                myColor={COLORS.primaryColor}
                myFontWeight="bold"
                myText="SEE ALL"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            numColumns={2}
            data={PRODUCTS}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => toDetail(index)}>
                <Product props={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.small,
  },
  container__header__name: {
    marginVertical: SPACING.xlarge,
  },
});
