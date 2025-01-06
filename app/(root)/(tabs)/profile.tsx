import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { logout } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";

type SettingsItemProps = {
  icon: ImageSourcePropType;
  title: string;
  onPress: () => void;
  textStyle?: string;
  showArrow?: boolean;
};
const SettingItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
    >
      <View className="flex flex-row items-center gap-3">
        <Image
          source={icon}
          className="size-6"
        />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {" "}
          {title}
        </Text>
      </View>

      {showArrow && (
        <Image
          source={icons.rightArrow}
          className="size-5"
        />
      )}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      console.log(result);
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold"> Profile</Text>
          <Image
            source={icons.bell}
            className="size-5"
          />
        </View>

        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={{uri: user?.avatar}}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image
                source={icons.edit}
                className="size-9"
              />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10">
          <SettingItems
            icon={icons.calendar}
            title="My Bookings"
            onPress={() =>
              Alert.alert("Coming Soon", "This feature is coming soon")
            }
          />
          <SettingItems
            icon={icons.wallet}
            title="Payments"
            onPress={() =>
              Alert.alert("Coming Soon", "This feature is coming soon")
            }
          />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingItems
              key={index}
              {...item}
              onPress={() =>
                Alert.alert("Coming Soon", "This feature is coming soon")
              }
            />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingItems
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
