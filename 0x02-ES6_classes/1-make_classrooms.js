import ClassRoom from "./0-classroom";
/**
 * initializeRooms - initializing and storing in an array
 * @returns an array with ClassRoom objects
 */
export default function initializeRooms() {
  const x = new ClassRoom(19);
  const y = new ClassRoom(20);
  const z = new ClassRoom(34);

  return new Array(x, y, z);
}