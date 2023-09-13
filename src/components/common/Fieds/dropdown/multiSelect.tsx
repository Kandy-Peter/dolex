import { AntDesign } from "@expo/vector-icons";
import React, { FC, ReactElement, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from "react-native";

import CheckBox from "../checkBox";

import { COLORS, FONT, SIZES } from "@/constants/theme";
import capitalizeFirstLetter from "@/utils/capitalize";

interface Props {
  name: string;
  data: { name: string; code: string; symbol: string; name_plural: string }[];
  onSelect: (items: {code: string}[]) => void;
  error: string;
  onFocus?: (ev: any) => void;
}

const MultiSelectDropdown: FC<Props> = ({
  name,
  data,
  onSelect,
  error,
  onFocus,
}) => {
  const DropdownButton = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    if (visible) {
      setVisible(false);
    } else {
      openDropdown();
    }
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownTop(py + h);
      },
    );
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    const selectedItemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.code === item.code,
    );

    if (selectedItemIndex !== -1) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(selectedItemIndex, 1);
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const onSelectCallback = (items: any[]) => {
    const selectedCodes = items.map((item) => item.code);
    onSelect(selectedCodes); // Pass the selected codes to the prop
    setVisible(false);
  };

  const renderCheckBoxItem = ({ item }: any): ReactElement<any, any> => (
    <CheckBox
      label={capitalizeFirstLetter(item.name)}
      value={selectedItems.some(
        (selectedItem) => selectedItem.code === item.code,
      )}
      onChange={() => onItemPress(item)}
    />
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity style={styles.overlay}>
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderCheckBoxItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity onPress={() => onSelectCallback(selectedItems)}>
              <Text
                style={styles.selectButton}
                onPress={() => setVisible(false)}
              >
                Select
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  const selectedLabels = selectedItems.map((item) => (
    <View style={styles.itemContainer} key={item.value}>
      <Text style={styles.selectedText}>
        {capitalizeFirstLetter(item.code)}
      </Text>
    </View>
  ));

  return (
    <>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}
        onFocus={onFocus}
      >
        {renderDropdown()}
        <View style={styles.selectedLabelsContainer}>
          {selectedLabels.length ? (
            selectedLabels
          ) : (
            <Text style={styles.buttonText}>{capitalizeFirstLetter(name)}</Text>
          )}
        </View>
        <AntDesign name="caretdown" size={20} color={COLORS.gray} />
      </TouchableOpacity>
      <Text style={{ color: "red", fontSize: 12 }}>{error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.darkWhite,
    borderRadius: 9,
    height: 50,
    zIndex: 1,
    paddingHorizontal: 10,
  },
  buttonText: {
    flex: 1,
    fontFamily: FONT.regular,
    color: COLORS.darkGray,
  },
  selectedLabelsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#31b7002a",
    marginHorizontal: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 8,
    minWidth: 80,
  },
  selectedText: {
    color: COLORS.darkGray,
    fontFamily: FONT.bold,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 9,
    shadowColor: COLORS.primaryOpaque,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    padding: 10,
  },
  overlay: {
    width: "90%",
    height: "100%",
    marginHorizontal: SIZES.medium,
  },
  selectButton: {
    marginTop: 10,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: 16,
    textAlign: "center",
  },
});

export default MultiSelectDropdown;
