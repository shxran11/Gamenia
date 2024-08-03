import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card marginY="10px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} marginLeft="5px" />
        <CardBody>
          <SkeletonText noOfLines={1} skeletonHeight="2" />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
