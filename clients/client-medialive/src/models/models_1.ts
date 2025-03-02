import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

import { MediaLiveServiceException as __BaseException } from "./MediaLiveServiceException";
import {
  ArchiveGroupSettings,
  AudioDescription,
  BatchFailedResultModel,
  BatchSuccessfulResultModel,
  CaptionDescription,
  CaptionLanguageMapping,
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelState,
  ChannelSummary,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  FrameCaptureGroupSettings,
  Hdr10Settings,
  HlsAdMarkers,
  HlsCaptionLanguageSetting,
  HlsCdnSettings,
  HlsClientCache,
  HlsCodecSpecification,
  HlsDirectoryStructure,
  HlsDiscontinuityTags,
  HlsEncryptionType,
  HlsId3SegmentTaggingState,
  HlsIncompleteSegmentBehavior,
  HlsIvInManifest,
  HlsIvSource,
  HlsManifestCompression,
  HlsManifestDurationFormat,
  HlsMode,
  HlsOutputSelection,
  HlsProgramDateTime,
  HlsProgramDateTimeClock,
  HlsRedundantManifest,
  HlsSegmentationMode,
  HlsStreamInfResolution,
  HlsTimedMetadataId3Frame,
  IFrameOnlyPlaylistType,
  Input,
  InputAttachment,
  InputClass,
  InputDestination,
  InputDestinationRequest,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceRequest,
  InputDeviceSettings,
  InputDeviceSummary,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputLocation,
  InputLossActionForHlsOut,
  InputSecurityGroup,
  InputSecurityGroupState,
  InputSource,
  InputSourceRequest,
  InputSourceType,
  InputSpecification,
  InputState,
  InputType,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  KeyProviderSettings,
  LogLevel,
  MaintenanceDay,
  MaintenanceStatus,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MultiplexOutputDestination,
  MultiplexProgramPipelineDetail,
  MultiplexProgramSummary,
  MultiplexState,
  MultiplexSummary,
  Offering,
  OfferingDurationUnits,
  OfferingType,
  Output,
  OutputDestination,
  OutputLocationRef,
  ReservationResourceSpecification,
  VpcOutputSettingsDescription,
} from "./models_0";

export enum HlsTsFileMode {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

/**
 * Hls Group Settings
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlContent?: string;

  /**
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   */
  BaseUrlContent1?: string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlManifest?: string;

  /**
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   */
  BaseUrlManifest1?: string;

  /**
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   */
  ConstantIv?: string;

  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Place segments in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
   * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
   * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   */
  DiscontinuityTags?: HlsDiscontinuityTags | string;

  /**
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   */
  EncryptionType?: HlsEncryptionType | string;

  /**
   * Parameters that control interactions with the CDN.
   */
  HlsCdnSettings?: HlsCdnSettings;

  /**
   * State of HLS ID3 Segment Tagging
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState | string;

  /**
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType | string;

  /**
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
   * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
   * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   */
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior | string;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.
   */
  IndexNSegments?: number;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForHlsOut | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   */
  IvInManifest?: HlsIvInManifest | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   */
  IvSource?: HlsIvSource | string;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).
   *
   * If this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.
   */
  KeepSegments?: number;

  /**
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   */
  KeyFormat?: string;

  /**
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * The key provider settings.
   */
  KeyProviderSettings?: KeyProviderSettings;

  /**
   * When set to gzip, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   */
  Mode?: HlsMode | string;

  /**
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:
   *
   * INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.
   *
   * SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   */
  ProgramDateTimeClock?: HlsProgramDateTimeClock | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   */
  RedundantManifest?: HlsRedundantManifest | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: HlsSegmentationMode | string;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;

  /**
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   */
  TsFileMode?: HlsTsFileMode | string;
}

export namespace HlsGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Media Package Group Settings
 */
export interface MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace MediaPackageGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPackageGroupSettings): any => ({
    ...obj,
  });
}

export enum SmoothGroupAudioOnlyTimecodeControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED_CLOCK = "USE_CONFIGURED_CLOCK",
}

export enum SmoothGroupCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

export enum SmoothGroupEventIdMode {
  NO_EVENT_ID = "NO_EVENT_ID",
  USE_CONFIGURED = "USE_CONFIGURED",
  USE_TIMESTAMP = "USE_TIMESTAMP",
}

export enum SmoothGroupEventStopBehavior {
  NONE = "NONE",
  SEND_EOS = "SEND_EOS",
}

export enum InputLossActionForMsSmoothOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum SmoothGroupSegmentationMode {
  USE_INPUT_SEGMENTATION = "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION = "USE_SEGMENT_DURATION",
}

export enum SmoothGroupSparseTrackType {
  NONE = "NONE",
  SCTE_35 = "SCTE_35",
  SCTE_35_WITHOUT_SEGMENTATION = "SCTE_35_WITHOUT_SEGMENTATION",
}

export enum SmoothGroupStreamManifestBehavior {
  DO_NOT_SEND = "DO_NOT_SEND",
  SEND = "SEND",
}

export enum SmoothGroupTimestampOffsetMode {
  USE_CONFIGURED_OFFSET = "USE_CONFIGURED_OFFSET",
  USE_EVENT_START_DATE = "USE_EVENT_START_DATE",
}

/**
 * Ms Smooth Group Settings
 */
export interface MsSmoothGroupSettings {
  /**
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   */
  AcquisitionPointId?: string;

  /**
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl | string;

  /**
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   */
  CertificateMode?: SmoothGroupCertificateMode | string;

  /**
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   */
  ConnectionRetryInterval?: number;

  /**
   * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * MS Smooth event ID to be sent to the IIS server.
   *
   * Should only be specified if eventIdMode is set to useConfigured.
   */
  EventId?: string;

  /**
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   */
  EventIdMode?: SmoothGroupEventIdMode | string;

  /**
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior | string;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   */
  FragmentLength?: number;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForMsSmoothOut | string;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;

  /**
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   */
  RestartDelay?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: SmoothGroupSegmentationMode | string;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   */
  SendDelayMs?: number;

  /**
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   */
  SparseTrackType?: SmoothGroupSparseTrackType | string;

  /**
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior | string;

  /**
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   */
  TimestampOffset?: string;

  /**
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode | string;
}

export namespace MsSmoothGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MsSmoothGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex Group Settings
 */
export interface MultiplexGroupSettings {}

export namespace MultiplexGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexGroupSettings): any => ({
    ...obj,
  });
}

export enum RtmpAdMarkers {
  ON_CUE_POINT_SCTE35 = "ON_CUE_POINT_SCTE35",
}

export enum AuthenticationScheme {
  AKAMAI = "AKAMAI",
  COMMON = "COMMON",
}

export enum RtmpCacheFullBehavior {
  DISCONNECT_IMMEDIATELY = "DISCONNECT_IMMEDIATELY",
  WAIT_FOR_SERVER = "WAIT_FOR_SERVER",
}

export enum RtmpCaptionData {
  ALL = "ALL",
  FIELD1_608 = "FIELD1_608",
  FIELD1_AND_FIELD2_608 = "FIELD1_AND_FIELD2_608",
}

export enum InputLossActionForRtmpOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

/**
 * Rtmp Group Settings
 */
export interface RtmpGroupSettings {
  /**
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   */
  AdMarkers?: (RtmpAdMarkers | string)[];

  /**
   * Authentication scheme to use when connecting with CDN
   */
  AuthenticationScheme?: AuthenticationScheme | string;

  /**
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   */
  CacheFullBehavior?: RtmpCacheFullBehavior | string;

  /**
   * Cache length, in seconds, is used to calculate buffer size.
   */
  CacheLength?: number;

  /**
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   */
  CaptionData?: RtmpCaptionData | string;

  /**
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   */
  InputLossAction?: InputLossActionForRtmpOut | string;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export namespace RtmpGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RtmpGroupSettings): any => ({
    ...obj,
  });
}

export enum InputLossActionForUdpOut {
  DROP_PROGRAM = "DROP_PROGRAM",
  DROP_TS = "DROP_TS",
  EMIT_PROGRAM = "EMIT_PROGRAM",
}

export enum UdpTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

/**
 * Udp Group Settings
 */
export interface UdpGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   */
  InputLossAction?: InputLossActionForUdpOut | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;
}

export namespace UdpGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UdpGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Output Group Settings
 */
export interface OutputGroupSettings {
  /**
   * Archive Group Settings
   */
  ArchiveGroupSettings?: ArchiveGroupSettings;

  /**
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * Hls Group Settings
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Multiplex Group Settings
   */
  MultiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: RtmpGroupSettings;

  /**
   * Udp Group Settings
   */
  UdpGroupSettings?: UdpGroupSettings;
}

export namespace OutputGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface OutputGroup {
  /**
   * Custom output group name optionally defined by the user.
   */
  Name?: string;

  /**
   * Settings associated with the output group.
   */
  OutputGroupSettings: OutputGroupSettings | undefined;

  /**
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Output[] | undefined;
}

export namespace OutputGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputGroup): any => ({
    ...obj,
  });
}

/**
 * Runtime details of a pipeline when a channel is running.
 */
export interface PipelineDetail {
  /**
   * The name of the active input attachment currently being ingested by this pipeline.
   */
  ActiveInputAttachmentName?: string;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   */
  ActiveInputSwitchActionName?: string;

  /**
   * The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.
   */
  ActiveMotionGraphicsActionName?: string;

  /**
   * The current URI being used for HTML5 motion graphics for this pipeline.
   */
  ActiveMotionGraphicsUri?: string;

  /**
   * Pipeline ID
   */
  PipelineId?: string;
}

export namespace PipelineDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineDetail): any => ({
    ...obj,
  });
}

export enum PipelineId {
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

/**
 * Settings for pausing a pipeline.
 */
export interface PipelinePauseStateSettings {
  /**
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   */
  PipelineId: PipelineId | string | undefined;
}

export namespace PipelinePauseStateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelinePauseStateSettings): any => ({
    ...obj,
  });
}

export enum ReservationState {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
}

/**
 * Reserved resources available to use
 */
export interface Reservation {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace Reservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   */
  Tag: string | undefined;
}

export namespace HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsId3SegmentTaggingScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to emit HLS metadata
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string | undefined;
}

export namespace HlsTimedMetadataScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsTimedMetadataScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  ZEROBASED = "ZEROBASED",
}

/**
 * Settings to identify the start of the clip.
 */
export interface StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StartTimecode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTimecode): any => ({
    ...obj,
  });
}

export enum LastFrameClippingBehavior {
  EXCLUDE_LAST_FRAME = "EXCLUDE_LAST_FRAME",
  INCLUDE_LAST_FRAME = "INCLUDE_LAST_FRAME",
}

/**
 * Settings to identify the end of the clip.
 */
export interface StopTimecode {
  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior | string;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StopTimecode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTimecode): any => ({
    ...obj,
  });
}

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface InputClippingSettings {
  /**
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: InputTimecodeSource | string | undefined;

  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: StartTimecode;

  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: StopTimecode;
}

export namespace InputClippingSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputClippingSettings): any => ({
    ...obj,
  });
}

/**
 * Action to prepare an input for a future immediate input switch.
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.
   */
  InputAttachmentNameReference?: string;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

export namespace InputPrepareScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputPrepareScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

export namespace InputSwitchScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSwitchScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify the rendering of motion graphics into the video stream.
 */
export interface MotionGraphicsActivateScheduleActionSettings {
  /**
   * Duration (in milliseconds) that motion graphics should render on to the video stream. Leaving out this property or setting to 0 will result in rendering continuing until a deactivate action is processed.
   */
  Duration?: number;

  /**
   * Key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * URI of the HTML5 content to be rendered into the live stream.
   */
  Url?: string;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export namespace MotionGraphicsActivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsActivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify the ending of rendering motion graphics into the video stream.
 */
export interface MotionGraphicsDeactivateScheduleActionSettings {}

export namespace MotionGraphicsDeactivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsDeactivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to set pause state of a channel.
 */
export interface PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?: PipelinePauseStateSettings[];
}

export namespace PauseStateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PauseStateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 return_to_network message.
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35ReturnToNetworkScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 splice_insert message.
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   */
  Duration?: number;

  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35SpliceInsertScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35SpliceInsertScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum Scte35ArchiveAllowedFlag {
  ARCHIVE_ALLOWED = "ARCHIVE_ALLOWED",
  ARCHIVE_NOT_ALLOWED = "ARCHIVE_NOT_ALLOWED",
}

export enum Scte35DeviceRestrictions {
  NONE = "NONE",
  RESTRICT_GROUP0 = "RESTRICT_GROUP0",
  RESTRICT_GROUP1 = "RESTRICT_GROUP1",
  RESTRICT_GROUP2 = "RESTRICT_GROUP2",
}

export enum Scte35NoRegionalBlackoutFlag {
  NO_REGIONAL_BLACKOUT = "NO_REGIONAL_BLACKOUT",
  REGIONAL_BLACKOUT = "REGIONAL_BLACKOUT",
}

export enum Scte35WebDeliveryAllowedFlag {
  WEB_DELIVERY_ALLOWED = "WEB_DELIVERY_ALLOWED",
  WEB_DELIVERY_NOT_ALLOWED = "WEB_DELIVERY_NOT_ALLOWED",
}

/**
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 */
export interface Scte35DeliveryRestrictions {
  /**
   * Corresponds to SCTE-35 archive_allowed_flag.
   */
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions: Scte35DeviceRestrictions | string | undefined;

  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | string | undefined;
}

export namespace Scte35DeliveryRestrictions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35DeliveryRestrictions): any => ({
    ...obj,
  });
}

export enum Scte35SegmentationCancelIndicator {
  SEGMENTATION_EVENT_CANCELED = "SEGMENTATION_EVENT_CANCELED",
  SEGMENTATION_EVENT_NOT_CANCELED = "SEGMENTATION_EVENT_NOT_CANCELED",
}

/**
 * Corresponds to SCTE-35 segmentation_descriptor.
 */
export interface Scte35SegmentationDescriptor {
  /**
   * Holds the four SCTE-35 delivery restriction parameters.
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SegmentNum?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | string | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   */
  SegmentationDuration?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   */
  SegmentationTypeId?: number;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   */
  SegmentationUpid?: string;

  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   */
  SegmentationUpidType?: number;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentNum?: number;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentsExpected?: number;
}

export namespace Scte35SegmentationDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35SegmentationDescriptor): any => ({
    ...obj,
  });
}

/**
 * SCTE-35 Descriptor settings.
 */
export interface Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor | undefined;
}

export namespace Scte35DescriptorSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35DescriptorSettings): any => ({
    ...obj,
  });
}

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

export namespace Scte35Descriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35Descriptor): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 time_signal.
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Scte35Descriptor[] | undefined;
}

export namespace Scte35TimeSignalScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35TimeSignalScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to activate a static image.
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   */
  Duration?: number;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   */
  FadeIn?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   */
  Height?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   */
  ImageX?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   */
  ImageY?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   */
  Layer?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   */
  Opacity?: number;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   */
  Width?: number;
}

export namespace StaticImageActivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticImageActivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to deactivate the image in a specific layer.
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   */
  Layer?: number;
}

export namespace StaticImageDeactivateScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticImageDeactivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Holds the settings for a single schedule action.
 */
export interface ScheduleActionSettings {
  /**
   * Action to insert HLS ID3 segment tagging
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * Action to prepare an input for a future immediate input switch
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * Action to switch the input
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * Action to activate a motion graphics image overlay
   */
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;

  /**
   * Action to deactivate a motion graphics image overlay
   */
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
}

export namespace ScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Start time for the action.
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string | undefined;
}

export namespace FixedModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FixedModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

export enum FollowPoint {
  END = "END",
  START = "START",
}

/**
 * Settings to specify if an action follows another.
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: FollowPoint | string | undefined;

  /**
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string | undefined;
}

export namespace FollowModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FollowModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to configure an action so that it occurs as soon as possible.
 */
export interface ImmediateModeScheduleActionStartSettings {}

export namespace ImmediateModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImmediateModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify when an action should occur. Only one of the options must be selected.
 */
export interface ScheduleActionStartSettings {
  /**
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
}

export namespace ScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Contains information on a single schedule action.
 */
export interface ScheduleAction {
  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string | undefined;

  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;
}

export namespace ScheduleAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleAction): any => ({
    ...obj,
  });
}

export enum InputDeviceTransferType {
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
}

/**
 * Details about the input device that is being transferred.
 */
export interface TransferringInputDeviceSummary {
  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The optional message that the sender has attached to the transfer.
   */
  Message?: string;

  /**
   * The AWS account ID for the recipient of the input device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The type (direction) of the input device transfer.
   */
  TransferType?: InputDeviceTransferType | string;
}

export namespace TransferringInputDeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferringInputDeviceSummary): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ValidationError
 */
export interface ValidationError {
  /**
   * Path to the source of the error.
   */
  ElementPath?: string;

  /**
   * The error message.
   */
  ErrorMessage?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

export enum FrameCaptureIntervalUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
}

/**
 * Frame Capture Settings
 */
export interface FrameCaptureSettings {
  /**
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   */
  CaptureInterval?: number;

  /**
   * Unit for the frame capture interval.
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit | string;
}

export namespace FrameCaptureSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

export enum H264AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

export enum H264ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * Passthrough applies no color space conversion to the output
 */
export interface ColorSpacePassthroughSettings {}

export namespace ColorSpacePassthroughSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColorSpacePassthroughSettings): any => ({
    ...obj,
  });
}

/**
 * Rec601 Settings
 */
export interface Rec601Settings {}

export namespace Rec601Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rec601Settings): any => ({
    ...obj,
  });
}

/**
 * Rec709 Settings
 */
export interface Rec709Settings {}

export namespace Rec709Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rec709Settings): any => ({
    ...obj,
  });
}

/**
 * H264 Color Space Settings
 */
export interface H264ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

export namespace H264ColorSpaceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264ColorSpaceSettings): any => ({
    ...obj,
  });
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum TemporalFilterPostFilterSharpening {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TemporalFilterStrength {
  AUTO = "AUTO",
  STRENGTH_1 = "STRENGTH_1",
  STRENGTH_10 = "STRENGTH_10",
  STRENGTH_11 = "STRENGTH_11",
  STRENGTH_12 = "STRENGTH_12",
  STRENGTH_13 = "STRENGTH_13",
  STRENGTH_14 = "STRENGTH_14",
  STRENGTH_15 = "STRENGTH_15",
  STRENGTH_16 = "STRENGTH_16",
  STRENGTH_2 = "STRENGTH_2",
  STRENGTH_3 = "STRENGTH_3",
  STRENGTH_4 = "STRENGTH_4",
  STRENGTH_5 = "STRENGTH_5",
  STRENGTH_6 = "STRENGTH_6",
  STRENGTH_7 = "STRENGTH_7",
  STRENGTH_8 = "STRENGTH_8",
  STRENGTH_9 = "STRENGTH_9",
}

/**
 * Temporal Filter Settings
 */
export interface TemporalFilterSettings {
  /**
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening | string;

  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   */
  Strength?: TemporalFilterStrength | string;
}

export namespace TemporalFilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemporalFilterSettings): any => ({
    ...obj,
  });
}

/**
 * H264 Filter Settings
 */
export interface H264FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H264FilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264FilterSettings): any => ({
    ...obj,
  });
}

export enum FixedAfd {
  AFD_0000 = "AFD_0000",
  AFD_0010 = "AFD_0010",
  AFD_0011 = "AFD_0011",
  AFD_0100 = "AFD_0100",
  AFD_1000 = "AFD_1000",
  AFD_1001 = "AFD_1001",
  AFD_1010 = "AFD_1010",
  AFD_1011 = "AFD_1011",
  AFD_1101 = "AFD_1101",
  AFD_1110 = "AFD_1110",
  AFD_1111 = "AFD_1111",
}

export enum H264FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264ForceFieldPictures {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H264Level {
  H264_LEVEL_1 = "H264_LEVEL_1",
  H264_LEVEL_1_1 = "H264_LEVEL_1_1",
  H264_LEVEL_1_2 = "H264_LEVEL_1_2",
  H264_LEVEL_1_3 = "H264_LEVEL_1_3",
  H264_LEVEL_2 = "H264_LEVEL_2",
  H264_LEVEL_2_1 = "H264_LEVEL_2_1",
  H264_LEVEL_2_2 = "H264_LEVEL_2_2",
  H264_LEVEL_3 = "H264_LEVEL_3",
  H264_LEVEL_3_1 = "H264_LEVEL_3_1",
  H264_LEVEL_3_2 = "H264_LEVEL_3_2",
  H264_LEVEL_4 = "H264_LEVEL_4",
  H264_LEVEL_4_1 = "H264_LEVEL_4_1",
  H264_LEVEL_4_2 = "H264_LEVEL_4_2",
  H264_LEVEL_5 = "H264_LEVEL_5",
  H264_LEVEL_5_1 = "H264_LEVEL_5_1",
  H264_LEVEL_5_2 = "H264_LEVEL_5_2",
  H264_LEVEL_AUTO = "H264_LEVEL_AUTO",
}

export enum H264LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264Profile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264QualityLevel {
  ENHANCED_QUALITY = "ENHANCED_QUALITY",
  STANDARD_QUALITY = "STANDARD_QUALITY",
}

export enum H264RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H264ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SpatialAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SubGopLength {
  DYNAMIC = "DYNAMIC",
  FIXED = "FIXED",
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027",
}

export enum H264TemporalAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

/**
 * H264 Settings
 */
export interface H264Settings {
  /**
   * Enables or disables adaptive quantization, which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: flicker, spatial, and temporal. Set the field in one of these ways: Set to Auto. Recommended. For each type of AQ, MediaLive will determine if AQ is needed, and if so, the appropriate strength. Set a strength (a value other than Auto or Disable). This strength will apply to any of the AQ fields that you choose to enable. Set to Disabled to disable all types of adaptive quantization.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H264ColorMetadata | string;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H264FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if flicker AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply flicker AQ using the specified strength. Disabled: MediaLive won't apply flicker AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply flicker AQ.
   */
  FlickerAq?: H264FlickerAq | string;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   */
  ForceFieldPictures?: H264ForceFieldPictures | string;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Documentation update needed
   */
  GopBReference?: H264GopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * H.264 Level.
   */
  Level?: H264Level | string;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H264LookAheadRateControl | string;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   */
  ParControl?: H264ParControl | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * H.264 Profile.
   */
  Profile?: H264Profile | string;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   */
  QualityLevel?: H264QualityLevel | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * To let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide
   */
  QvbrQualityLevel?: number;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * VBR: Quality and bitrate vary, depending on the video complexity. Recommended instead of QVBR
   * if you want to maintain a specific average bitrate over the duration of the channel.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H264ScanType | string;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.
   */
  Softness?: number;

  /**
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if spatial AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply spatial AQ using the specified strength. Disabled: MediaLive won't apply spatial AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply spatial AQ.
   */
  SpatialAq?: H264SpatialAq | string;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: H264SubGopLength | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * Temporal makes adjustments within each frame based on temporal variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if temporal AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply temporal AQ using the specified strength. Disabled: MediaLive won't apply temporal AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply temporal AQ.
   */
  TemporalAq?: H264TemporalAq | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior | string;
}

export namespace H264Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj,
  });
}

export enum H265AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H265AlternativeTransferFunction {
  INSERT = "INSERT",
  OMIT = "OMIT",
}

export enum H265ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * H265 Color Space Settings
 */
export interface H265ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

export namespace H265ColorSpaceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265ColorSpaceSettings): any => ({
    ...obj,
  });
}

/**
 * H265 Filter Settings
 */
export interface H265FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H265FilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265FilterSettings): any => ({
    ...obj,
  });
}

export enum H265FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H265Level {
  H265_LEVEL_1 = "H265_LEVEL_1",
  H265_LEVEL_2 = "H265_LEVEL_2",
  H265_LEVEL_2_1 = "H265_LEVEL_2_1",
  H265_LEVEL_3 = "H265_LEVEL_3",
  H265_LEVEL_3_1 = "H265_LEVEL_3_1",
  H265_LEVEL_4 = "H265_LEVEL_4",
  H265_LEVEL_4_1 = "H265_LEVEL_4_1",
  H265_LEVEL_5 = "H265_LEVEL_5",
  H265_LEVEL_5_1 = "H265_LEVEL_5_1",
  H265_LEVEL_5_2 = "H265_LEVEL_5_2",
  H265_LEVEL_6 = "H265_LEVEL_6",
  H265_LEVEL_6_1 = "H265_LEVEL_6_1",
  H265_LEVEL_6_2 = "H265_LEVEL_6_2",
  H265_LEVEL_AUTO = "H265_LEVEL_AUTO",
}

export enum H265LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H265Profile {
  MAIN = "MAIN",
  MAIN_10BIT = "MAIN_10BIT",
}

export enum H265RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
}

export enum H265ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Tier {
  HIGH = "HIGH",
  MAIN = "MAIN",
}

export enum H265TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

/**
 * H265 Settings
 */
export interface H265Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H265ColorMetadata | string;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H265FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H265FlickerAq | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator: number | undefined;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator: number | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * H.265 Level.
   */
  Level?: H265Level | string;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H265LookAheadRateControl | string;

  /**
   * For QVBR: See the tooltip for Quality level
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * H.265 Profile.
   */
  Profile?: H265Profile | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H265ScanType | string;

  /**
   * Scene change detection.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * H.265 Tier.
   */
  Tier?: H265Tier | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior | string;
}

export namespace H265Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj,
  });
}

export enum Mpeg2AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Mpeg2ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

export enum Mpeg2ColorSpace {
  AUTO = "AUTO",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum Mpeg2DisplayRatio {
  DISPLAYRATIO16X9 = "DISPLAYRATIO16X9",
  DISPLAYRATIO4X3 = "DISPLAYRATIO4X3",
}

/**
 * Mpeg2 Filter Settings
 */
export interface Mpeg2FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace Mpeg2FilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mpeg2FilterSettings): any => ({
    ...obj,
  });
}

export enum Mpeg2GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum Mpeg2ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum Mpeg2SubGopLength {
  DYNAMIC = "DYNAMIC",
  FIXED = "FIXED",
}

export enum Mpeg2TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  GOP_TIMECODE = "GOP_TIMECODE",
}

/**
 * Mpeg2 Settings
 */
export interface Mpeg2Settings {
  /**
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   */
  ColorMetadata?: Mpeg2ColorMetadata | string;

  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   */
  ColorSpace?: Mpeg2ColorSpace | string;

  /**
   * Sets the pixel aspect ratio for the encode.
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio | string;

  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   */
  FilterSettings?: Mpeg2FilterSettings;

  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateDenominator: number | undefined;

  /**
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateNumerator: number | undefined;

  /**
   * MPEG2: default is open GOP.
   */
  GopClosedCadence?: number;

  /**
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   */
  GopNumBFrames?: number;

  /**
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
   * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   */
  GopSize?: number;

  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   */
  ScanType?: Mpeg2ScanType | string;

  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   */
  SubgopLength?: Mpeg2SubGopLength | string;

  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior | string;
}

export namespace Mpeg2Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mpeg2Settings): any => ({
    ...obj,
  });
}

/**
 * Video Codec Settings
 */
export interface VideoCodecSettings {
  /**
   * Frame Capture Settings
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * H264 Settings
   */
  H264Settings?: H264Settings;

  /**
   * H265 Settings
   */
  H265Settings?: H265Settings;

  /**
   * Mpeg2 Settings
   */
  Mpeg2Settings?: Mpeg2Settings;
}

export namespace VideoCodecSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoCodecSettings): any => ({
    ...obj,
  });
}

export enum VideoDescriptionRespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND",
}

export enum VideoDescriptionScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT",
}

/**
 * Video settings for this stream.
 */
export interface VideoDescription {
  /**
   * Video codec settings.
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.
   * RESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.
   * PASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.
   * NONE: MediaLive does not clip the input video and does not include the AFD values in the output
   */
  RespondToAfd?: VideoDescriptionRespondToAfd | string;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior | string;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Width?: number;
}

export namespace VideoDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj,
  });
}

export enum AcceptHeader {
  image_jpeg = "image/jpeg",
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferRequest
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to accept. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace AcceptInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferResponse
 */
export interface AcceptInputDeviceTransferResponse {}

export namespace AcceptInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadGatewayException
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for BadRequestException
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for ConflictException
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for ForbiddenException
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for GatewayTimeoutException
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayTimeoutException, __BaseException>) {
    super({
      name: "GatewayTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for InternalServerErrorException
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for NotFoundException
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for TooManyRequestsException
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for UnprocessableEntityException
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  /**
   * The error message.
   */
  Message?: string;

  /**
   * A collection of validation error responses.
   */
  ValidationErrors?: ValidationError[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Message = opts.Message;
    this.ValidationErrors = opts.ValidationErrors;
  }
}

export enum AvailBlankingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Avail Blanking
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: InputLocation;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: AvailBlankingState | string;
}

export namespace AvailBlanking {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj,
  });
}

export enum Scte35SpliceInsertNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35SpliceInsertWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Scte35 Splice Insert
 */
export interface Scte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior | string;
}

export namespace Scte35SpliceInsert {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35SpliceInsert): any => ({
    ...obj,
  });
}

export enum Scte35AposNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35AposWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Scte35 Time Signal Apos
 */
export interface Scte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior | string;
}

export namespace Scte35TimeSignalApos {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35TimeSignalApos): any => ({
    ...obj,
  });
}

/**
 * Avail Settings
 */
export interface AvailSettings {
  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}

export namespace AvailSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailSettings): any => ({
    ...obj,
  });
}

/**
 * Avail Configuration
 */
export interface AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: AvailSettings;
}

export namespace AvailConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailConfiguration): any => ({
    ...obj,
  });
}

/**
 * A request to delete resources
 */
export interface BatchDeleteRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of input IDs
   */
  InputIds?: string[];

  /**
   * List of input security group IDs
   */
  InputSecurityGroupIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchDeleteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchDeleteResponse
 */
export interface BatchDeleteResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchDeleteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteResponse): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been created in the schedule.
 */
export interface BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateResult): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to delete.
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: string[] | undefined;
}

export namespace BatchScheduleActionDeleteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been deleted from the schedule.
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionDeleteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteResult): any => ({
    ...obj,
  });
}

/**
 * A request to start resources
 */
export interface BatchStartRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchStartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStartRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStartResponse
 */
export interface BatchStartResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchStartResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStartResponse): any => ({
    ...obj,
  });
}

/**
 * A request to stop resources
 */
export interface BatchStopRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchStopRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStopResponse
 */
export interface BatchStopResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchStopResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopResponse): any => ({
    ...obj,
  });
}

/**
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Schedule actions to create in the schedule.
   */
  Creates?: BatchScheduleActionCreateRequest;

  /**
   * Schedule actions to delete from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteRequest;
}

export namespace BatchUpdateScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * Schedule actions created in the schedule.
   */
  Creates?: BatchScheduleActionCreateResult;

  /**
   * Schedule actions deleted from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteResult;
}

export namespace BatchUpdateScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateScheduleResponse): any => ({
    ...obj,
  });
}

export enum BlackoutSlateNetworkEndBlackout {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum BlackoutSlateState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Blackout Slate
 */
export interface BlackoutSlate {
  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  BlackoutSlateImage?: InputLocation;

  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout | string;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   */
  NetworkId?: string;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   */
  State?: BlackoutSlateState | string;
}

export namespace BlackoutSlate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlackoutSlate): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferRequest
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to cancel. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace CancelInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferResponse
 */
export interface CancelInputDeviceTransferResponse {}

export namespace CancelInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

export enum FeatureActivationsInputPrepareScheduleActions {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Feature Activations
 */
export interface FeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions | string;
}

export namespace FeatureActivations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureActivations): any => ({
    ...obj,
  });
}

export enum GlobalConfigurationInputEndAction {
  NONE = "NONE",
  SWITCH_AND_LOOP_INPUTS = "SWITCH_AND_LOOP_INPUTS",
}

export enum InputLossImageType {
  COLOR = "COLOR",
  SLATE = "SLATE",
}

/**
 * Input Loss Behavior
 */
export interface InputLossBehavior {
  /**
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: InputLocation;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: InputLossImageType | string;

  /**
   * Documentation update needed
   */
  RepeatFrameMsec?: number;
}

export namespace InputLossBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLossBehavior): any => ({
    ...obj,
  });
}

export enum GlobalConfigurationOutputLockingMode {
  EPOCH_LOCKING = "EPOCH_LOCKING",
  PIPELINE_LOCKING = "PIPELINE_LOCKING",
}

export enum GlobalConfigurationOutputTimingSource {
  INPUT_CLOCK = "INPUT_CLOCK",
  SYSTEM_CLOCK = "SYSTEM_CLOCK",
}

export enum GlobalConfigurationLowFramerateInputs {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Global Configuration
 */
export interface GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: GlobalConfigurationInputEndAction | string;

  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode | string;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource | string;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs | string;
}

export namespace GlobalConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalConfiguration): any => ({
    ...obj,
  });
}

export enum MotionGraphicsInsertion {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Html Motion Graphics Settings
 */
export interface HtmlMotionGraphicsSettings {}

export namespace HtmlMotionGraphicsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HtmlMotionGraphicsSettings): any => ({
    ...obj,
  });
}

/**
 * Motion Graphics Settings
 */
export interface MotionGraphicsSettings {
  /**
   * Html Motion Graphics Settings
   */
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}

export namespace MotionGraphicsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsSettings): any => ({
    ...obj,
  });
}

/**
 * Motion Graphics Configuration
 */
export interface MotionGraphicsConfiguration {
  /**
   * Motion Graphics Insertion
   */
  MotionGraphicsInsertion?: MotionGraphicsInsertion | string;

  /**
   * Motion Graphics Settings
   */
  MotionGraphicsSettings: MotionGraphicsSettings | undefined;
}

export namespace MotionGraphicsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsConfiguration): any => ({
    ...obj,
  });
}

export enum NielsenPcmToId3TaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Nielsen Configuration
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState | string;
}

export namespace NielsenConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj,
  });
}

export enum TimecodeConfigSource {
  EMBEDDED = "EMBEDDED",
  SYSTEMCLOCK = "SYSTEMCLOCK",
  ZEROBASED = "ZEROBASED",
}

/**
 * Timecode Config
 */
export interface TimecodeConfig {
  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   */
  Source: TimecodeConfigSource | string | undefined;

  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   */
  SyncThreshold?: number;
}

export namespace TimecodeConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj,
  });
}

/**
 * Encoder Settings
 */
export interface EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Feature Activations
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Settings for motion graphics.
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;

  /**
   * Nielsen configuration settings.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: VideoDescription[] | undefined;
}

export namespace EncoderSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncoderSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Channel
 */
export interface Channel {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * A request to claim an AWS Elemental device that you have purchased from a third-party vendor.
 */
export interface ClaimDeviceRequest {
  /**
   * The id of the device you want to claim.
   */
  Id?: string;
}

export namespace ClaimDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ClaimDeviceResponse
 */
export interface ClaimDeviceResponse {}

export namespace ClaimDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDeviceResponse): any => ({
    ...obj,
  });
}

export enum ContentType {
  image_jpeg = "image/jpeg",
}

/**
 * Placeholder documentation for MaintenanceCreateSettings
 */
export interface MaintenanceCreateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

export namespace MaintenanceCreateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceCreateSettings): any => ({
    ...obj,
  });
}

/**
 * The properties for a private VPC Output
 * When this property is specified, the output egress addresses will be created in a user specified VPC
 */
export interface VpcOutputSettings {
  /**
   * List of public address allocation ids to associate with ENIs that will be created in Output VPC.
   * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   */
  PublicAddressAllocationIds?: string[];

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

export namespace VpcOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcOutputSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a channel
 */
export interface CreateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceCreateSettings;

  /**
   * Name of channel.
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   */
  RequestId?: string;

  /**
   * @deprecated
   *
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for the VPC outputs
   */
  Vpc?: VpcOutputSettings;
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 */
export interface InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   */
  SecurityGroupIds?: string[];

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

export namespace InputVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputVpcRequest): any => ({
    ...obj,
  });
}

/**
 * The name of the input
 */
export interface CreateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   */
  Vpc?: InputVpcRequest;
}

export namespace CreateInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

export namespace CreateInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace CreateInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Contains configuration for a Multiplex event
 */
export interface MultiplexSettings {
  /**
   * Maximum video buffer delay in milliseconds.
   */
  MaximumVideoBufferDelayMilliseconds?: number;

  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Transport stream ID.
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream reserved bit rate.
   */
  TransportStreamReservedBitrate?: number;
}

export namespace MultiplexSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a multiplex.
 */
export interface CreateMultiplexRequest {
  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Name of multiplex.
   */
  Name: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * The multiplex object.
 */
export interface Multiplex {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace Multiplex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Multiplex): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace CreateMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexResponse): any => ({
    ...obj,
  });
}

export enum PreferredChannelPipeline {
  CURRENTLY_ACTIVE = "CURRENTLY_ACTIVE",
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the provider.
   */
  ProviderName: string | undefined;

  /**
   * Name of the service.
   */
  ServiceName: string | undefined;
}

export namespace MultiplexProgramServiceDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramServiceDescriptor): any => ({
    ...obj,
  });
}

/**
 * Statmux rate control settings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * Maximum statmux bitrate.
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   */
  MinimumBitrate?: number;

  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   */
  Priority?: number;
}

export namespace MultiplexStatmuxVideoSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexStatmuxVideoSettings): any => ({
    ...obj,
  });
}

/**
 * The video configuration for each program in a multiplex.
 */
export interface MultiplexVideoSettings {
  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   */
  ConstantBitrate?: number;

  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}

export namespace MultiplexVideoSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexVideoSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex Program settings configuration.
 */
export interface MultiplexProgramSettings {
  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline | string;

  /**
   * Unique program number.
   */
  ProgramNumber: number | undefined;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;
}

export namespace MultiplexProgramSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a program in a multiplex.
 */
export interface CreateMultiplexProgramRequest {
  /**
   * ID of the multiplex where the program is to be created.
   */
  MultiplexId: string | undefined;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;
}

export namespace CreateMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Packet identifiers map for a given Multiplex program.
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __listOf__integer
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  KlvDataPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   */
  TimedMetadataPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  VideoPid?: number;
}

export namespace MultiplexProgramPacketIdentifiersMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramPacketIdentifiersMap): any => ({
    ...obj,
  });
}

/**
 * The multiplex program object.
 */
export interface MultiplexProgram {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace MultiplexProgram {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgram): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace CreateMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * A request to create a partner input
 */
export interface CreatePartnerInputRequest {
  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace CreatePartnerInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartnerInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreatePartnerInputResponse
 */
export interface CreatePartnerInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreatePartnerInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartnerInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   */
  ChannelId: string | undefined;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace DeleteChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DeleteInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputResponse
 */
export interface DeleteInputResponse {}

export namespace DeleteInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * The Input Security Group to delete
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DeleteInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {}

export namespace DeleteInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DeleteMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace DeleteMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The multiplex program name.
   */
  ProgramName: string | undefined;
}

export namespace DeleteMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace DeleteMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DeleteReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DeleteReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * Id of the channel whose schedule is being deleted.
   */
  ChannelId: string | undefined;
}

export namespace DeleteScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {}

export namespace DeleteScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * channel ID
   */
  ChannelId: string | undefined;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DescribeInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of IDs for all Inputs which are partners of this one.
   */
  InputPartnerIds?: string[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;
}

export namespace DescribeInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace DescribeInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export namespace DescribeInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   */
  Accept: AcceptHeader | string | undefined;
}

export namespace DescribeInputDeviceThumbnailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * Specifies the media type of the thumbnail.
   */
  ContentType?: ContentType | string;

  /**
   * The length of the content.
   */
  ContentLength?: number;

  /**
   * The unique, cacheable version of this thumbnail.
   */
  ETag?: string;

  /**
   * The date and time the thumbnail was last updated at the device.
   */
  LastModified?: Date;
}

export namespace DescribeInputDeviceThumbnailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to describe
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DescribeInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];
}

export namespace DescribeInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DescribeMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The name of the program.
   */
  ProgramName: string | undefined;
}

export namespace DescribeMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace DescribeMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId: string | undefined;
}

export namespace DescribeOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DescribeOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DescribeReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DescribeReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace DescribeScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   */
  ScheduleActions?: ScheduleAction[];
}

export namespace DescribeScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Configurable settings for the input device.
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   */
  MaxBitrate?: number;
}

export namespace InputDeviceConfigurableSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceConfigurableSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: ChannelSummary[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDevicesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersRequest
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __string
   */
  TransferType: string | undefined;
}

export namespace ListInputDeviceTransfersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersResponse
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * The list of devices that you are transferring or are being transferred to you.
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDeviceTransfersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * List of input security groups
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * List of multiplexes.
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * Token for the next ListMultiplexes request.
   */
  NextToken?: string;
}

export namespace ListMultiplexesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The ID of the multiplex that the programs belong to.
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexProgramsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexProgramsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   */
  ChannelConfiguration?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Filter by offering duration, e.g. '12'
   */
  Duration?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

export namespace ListOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of offerings
   */
  Offerings?: Offering[];
}

export namespace ListOfferingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

export namespace ListReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of reservations
   */
  Reservations?: Reservation[];
}

export namespace ListReservationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MaintenanceUpdateSettings
 */
export interface MaintenanceUpdateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   */
  MaintenanceScheduledDate?: string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

export namespace MaintenanceUpdateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceUpdateSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * Number of resources
   */
  Count: number | undefined;

  /**
   * Name for the new reservation
   */
  Name?: string;

  /**
   * Offering to purchase, e.g. '87654321'
   */
  OfferingId: string | undefined;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   */
  RequestId?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   */
  Start?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };
}

export namespace PurchaseOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace PurchaseOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferRequest
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace RejectInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferResponse
 */
export interface RejectInputDeviceTransferResponse {}

export namespace RejectInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   */
  ChannelId: string | undefined;
}

export namespace StartChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace StartChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StartMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace StartMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

export namespace StopChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace StopChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StopMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace StopMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to transfer an input device.
 */
export interface TransferInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The target AWS region to transfer the device.
   */
  TargetRegion?: string;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   */
  TransferMessage?: string;
}

export namespace TransferInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {}

export namespace TransferInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | string | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];
}

export namespace UpdateChannelClassRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelClassRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelClassResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelClassResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];
}

export namespace UpdateInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace UpdateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the HD input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;

  /**
   * The settings that you want to apply to the UHD input device.
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;
}

export namespace UpdateInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export namespace UpdateInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

export namespace UpdateInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace UpdateInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * Name of the multiplex.
   */
  Name?: string;
}

export namespace UpdateMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace UpdateMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   */
  ProgramName: string | undefined;
}

export namespace UpdateMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramRequest): any => ({
    ...obj,
  });
}
