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

import { COLORS, FONT, SIZES } from "@/constants/theme";
import capitalizeFirstLetter from "@/utils/capitalize";

interface Props {
  name: string;
  data: { name: string; value: string; icon: any }[];
  onSelect: (item: { label: string; value: string }) => void;
  error: string;
  onFocus?: (ev: any) => void;
}

const Dropdown: FC<Props> = ({ name, data, onSelect, error, onFocus }) => {
  const DropdownButton = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<any>(null);
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
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{ color: COLORS.darkGray, fontFamily: FONT.bold }}>
        {capitalizeFirstLetter(item.name)}
      </Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}
        onFocus={onFocus}
      >
        {renderDropdown()}
        <Text style={styles.buttonText}>
          {(!!selected && capitalizeFirstLetter(selected.name)) ||
            capitalizeFirstLetter(name)}
        </Text>
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
  icon: {
    marginRight: 10,
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
  },
  overlay: {
    width: "90%",
    height: "100%",
    marginHorizontal: SIZES.medium,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkWhite,
  },
});

export default Dropdown;
