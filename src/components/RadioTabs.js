import React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { Colors } from "../core/theme";


export default function RNSRadioGroup({
  items,
  selectedIndex,
  onChange,
  style,
  underline,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, underline && styles.underline, style && style]}
    >
      {items &&
        items.map((item, index) => {
          let isActive = false;
          if (selectedIndex !== undefined && selectedIndex === index)
            isActive = true;

          let activeStyle = styles.itemActive;
          if (underline) activeStyle = styles.itemActiveUnderline;

          let activeTextStyle = styles.textActive;
          if (underline) activeTextStyle = styles.textActiveUnderline;

          return (
            <TouchableOpacity
              onPress={() => onChange(index)}
              key={item.id || item}
              style={[
                styles.item,
                underline && styles.itemUnderline,
                isActive && activeStyle,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  underline && styles.textUnderline,
                  isActive && activeTextStyle,
                ]}
              >
                {item.value || item}
              </Text>
              {underline && isActive && (
                <View
                  style={{
                    height: 5,
                    borderBottomColor: Colors.primary,
                    borderBottomWidth: 3,
                    position: 'absolute',
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: "#001422",
    borderWidth: 3,
    borderRadius: 5,
  },
  underline: {
    borderWidth: 0,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  itemUnderline: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e3e3e3',
  },
  itemActive: {
    backgroundColor: Colors.primary,
  },
  itemActiveUnderline: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  text: {
    color: Colors.primary,
  },
  textUnderline: {
    color: '#a6a6a6',
  },
  textActive: {
    color: Colors.white,
  },
  textActiveUnderline: {
    color: Colors.primary,
  },
};
