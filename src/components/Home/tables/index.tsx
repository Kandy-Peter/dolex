import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

import styles from "./style";

import RateCard from "@/components/common/Cards/RateCard";
import { COLORS } from "@/constants/theme";
import useFetch from "@/hook/useFetch";

const RateTable = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, pages } = useFetch("trades", page);

  const handlePagination = (direction: string) => {
    if (direction === "prev" && page > 1) {
      setPage(page - 1);
    } else if (direction === "next" && page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Rates</Text>
        <Text style={styles.separator} />
      </View>

      <View style={styles.tableBody}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={{ marginTop: 20 }}
          />
        ) : error ? (
          <Text style={{ padding: 40 }}>Error fetching data</Text>
        ) : (
          <>
            {data && data.length === 0 ? (
              <Text style={{ padding: 40 }}>No data available</Text>
            ) : (
              data.map((item: any) => (
                <View key={item._id} style={styles.tableRow}>
                  <RateCard item={item} />
                </View>
              ))
            )}
            {pages > 1 && data && data.length > 0 && (
              <View style={styles.paginationButtons}>
                <Pressable
                  onPress={() => handlePagination("prev")}
                  disabled={page === 1}
                >
                  <MaterialCommunityIcons
                    name="arrow-left-bold-circle"
                    size={55}
                    color={page === 1 ? COLORS.gray : COLORS.primary}
                  />
                </Pressable>
                <Text style={styles.paginationText}>
                  {page} of {pages}
                </Text>
                <Pressable
                  onPress={() => handlePagination("next")}
                  disabled={page === pages}
                >
                  <MaterialCommunityIcons
                    name="arrow-right-bold-circle"
                    size={55}
                    color={page === 1 ? COLORS.gray : COLORS.primary}
                  />
                </Pressable>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default RateTable;
