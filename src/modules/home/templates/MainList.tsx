import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent, RefreshControl, Platform, ActivityIndicator } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import { dynamicDashboardData as fullData } from '@utils/db'
import AdCarousel from '../organisms/AdCarousel';
import Categories from '../organisms/Categories';
import Sponser from '../organisms/Sponser';
import VerticalList from '../organisms/VerticalList';
import HorizontalList from '../organisms/HorizontalList';
import AnimatedHorizontalList from '../organisms/AnimatedHorizontalList';

const sectionComponents: { [key: string]: React.ComponentType<any> } = {
  ad_carousal: AdCarousel,
  categories: Categories,
  sponser: Sponser,
  vertical_list: VerticalList,
  horizontal_list: HorizontalList,
  animated_horizontal_list: AnimatedHorizontalList
}
const PAGE_SIZE = 4;

const MainList: FC<{ scrollYGlobal: any }> = ({ scrollYGlobal }) => {

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState(fullData.slice(0, PAGE_SIZE));
  const [currentpage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const prevScrollY = useRef(0);
  const flatlistRef = useRef(null);


  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset.y;
    scrollYGlobal.value = currentScrollY;
    prevScrollY.current = currentScrollY;
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentPage(1);
      setData(fullData?.slice(0, PAGE_SIZE));
    }, 3000);
    setIsRefreshing(false);
  }

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    if (data?.length >= fullData?.length) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentpage + 1;
      const newItems = fullData?.slice(0, nextPage * PAGE_SIZE);
      setData(newItems);
      setCurrentPage(nextPage);
      setIsLoadingMore(false);
    }, 4000);
  }


  const renderItem = ({ item }: any) => {
    const SectionComponent = sectionComponents[item?.type]
    return SectionComponent ? <SectionComponent data={item} /> : null;
  }



  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      overScrollMode='always'
      onScroll={handleScroll}
      ref={flatlistRef}
      scrollEventThrottle={16}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      nestedScrollEnabled={true}
      contentContainerStyle={{
        paddingBottom: Platform.OS === 'android' ? 400 : 300,
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={isLoadingMore ? (
        <ActivityIndicator
          size={'small'}
          color="#888"
          style={{ alignSelf: 'center', margin: 15 }}
        />
      ) : null}
    />
  )
}

export default MainList