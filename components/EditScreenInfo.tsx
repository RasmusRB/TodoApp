import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '~/constants/Colors';

export default function EditScreenInfo({ path, isDark }: { path: string; isDark: boolean }) {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View style={styles.getStartedContainer}>
      <Text
        style={[styles.getStartedText, { color: isDark ? Colors.dark.text : Colors.light.text }]}>
        {title}
      </Text>
      <View
        style={[
          styles.codeHighlightContainer,
          styles.homeScreenFilename,
          { backgroundColor: isDark ? Colors.dark.background : Colors.light.background },
        ]}>
        <Text style={{ color: isDark ? Colors.dark.text : Colors.light.text }}>{path}</Text>
      </View>
      <Text
        style={[styles.getStartedText, { color: isDark ? Colors.dark.text : Colors.light.text }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});
