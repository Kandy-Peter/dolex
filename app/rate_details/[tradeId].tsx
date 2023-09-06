import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import useFetch from "@/hook/useFetch";

const TradeDetails = () => {
  const params = useLocalSearchParams();

  const { data, isLoading, error, refetch } = useFetch(
    `trades/${params.tradeId}`,
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TradeDetails;
