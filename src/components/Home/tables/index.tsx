import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

import styles from "./style";

import RateCard from "@/components/common/Cards/RateCard";
import { COLORS } from "@/constants/theme";
import useFetch from "@/hook/useFetch";

const RateTable = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [prevData, setPrevData] = useState<null | any[]>(null);

  const { data, error, isLoading, pages } = useFetch("trades", {
    country: "rwanda",
    page: page.toString(),
  });

  const handlePagination = (direction: string) => {
    if (direction === "prev" && page > 1) {
      setPage(page - 1);
    } else if (direction === "next") {
      setPrevData(data);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    // Fetch data only when navigating forward
    if (!prevData) {
      handlePagination("next");
    }
  }, [page]);

  // Use memoization to render cached data when navigating backward
  const renderedData: any = useMemo(() => {
    if (page === 1) {
      return data;
    }
    return prevData;
  }, [data, prevData, page]);

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
            {renderedData && renderedData.length === 0 ? (
              <Text style={{ padding: 40 }}>No data available</Text>
            ) : (
              renderedData.map((item: any) => (
                <View key={item.id} style={styles.tableRow}>
                  <RateCard item={item} />
                </View>
              ))
            )}
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
          </>
        )}
      </View>
    </View>
  );
};

export default RateTable;
