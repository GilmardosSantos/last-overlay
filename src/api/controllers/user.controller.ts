import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import environment from '../../environment';
import type { FriendsParams } from '../models/user/FriendsParams';
import type { FriendsResponse } from '../models/user/FriendsResponse';
import type { InfoParams } from '../models/user/InfoParams';
import type { InfoResponse } from '../models/user/InfoResponse';
import type { LovedTracksParams } from '../models/user/LovedTracksParams';
import type { LovedTracksResponse } from '../models/user/LovedTracksResponse';
import type {
  PersonalTagsParams,
  TaggingTypes,
} from '../models/user/PersonalTagsParams';
import type { PersonalTagsResponse } from '../models/user/PersonalTagsResponse';
import type { RecentTracksParams } from '../models/user/RecentTrackParams';
import type { RecentTrackResponse } from '../models/user/RecentTrackResponse';
import type { TopAlbumsParams } from '../models/user/TopAlbumsParams';
import type { TopAlbumsResponse } from '../models/user/TopAlbumsResponse';
import type { TopArtistParams } from '../models/user/TopArtistsParams';
import type { TopArtistsResponse } from '../models/user/TopArtistsResponse';
import type { TopTagsParams } from '../models/user/TopTagsParams';
import type { TopTagsResponse } from '../models/user/TopTagsResponse';
import type { TopTracksParams } from '../models/user/TopTracksParams';
import type { TopTracksResponse } from '../models/user/TopTracksResponse';
import type { WeeklyAlbumChartParams } from '../models/user/WeeklyAlbumChartParams';
import type { WeeklyAlbumChartResponse } from '../models/user/WeeklyAlbumChartResponse';
import type { WeeklyArtistChartParams } from '../models/user/WeeklyArtistChartParams';
import type { WeeklyArtistChartResponse } from '../models/user/WeeklyArtistChartResponse';
import type { WeeklyChartListParams } from '../models/user/WeeklyChartListParams';
import type { WeeklyChartListResponse } from '../models/user/WeeklyChartListResponse';
import type { WeeklyTrackChartParams } from '../models/user/WeeklyTrackChartParams';
import type { WeeklyTrackChartResponse } from '../models/user/WeeklyTrackChartResponse';
import { ParamsUtils } from '../utils/params.utils';

export class UserController {
  private static url = environment.api_url;

  public static getFriends(
    params: FriendsParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<FriendsResponse>> {
    return axios.get<FriendsResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getFriends', params),
    });
  }

  public static getInfo(
    params: InfoParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<InfoResponse>> {
    return axios.get<InfoResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getInfo', params),
    });
  }

  public static getLovedTracks(
    params: LovedTracksParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<LovedTracksResponse>> {
    return axios.get<LovedTracksResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getLovedTracks', params),
    });
  }

  public static getPersonalTags<TaggingType extends TaggingTypes>(
    params: PersonalTagsParams<TaggingType>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<PersonalTagsResponse[TaggingType]>> {
    return axios.get<PersonalTagsResponse[TaggingType]>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getPersonalTags', params),
    });
  }

  public static getRecentTracks(
    params: RecentTracksParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<RecentTrackResponse>> {
    return axios.get<RecentTrackResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getRecentTracks', params),
    });
  }

  public static getTopAlbums(
    params: TopAlbumsParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TopAlbumsResponse>> {
    return axios.get<TopAlbumsResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getTopAlbums', params),
    });
  }

  public static getTopArtists(
    params: TopArtistParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TopArtistsResponse>> {
    return axios.get<TopArtistsResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getTopArtists', params),
    });
  }

  public static getTopTags(
    params: TopTagsParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TopTagsResponse>> {
    return axios.get<TopTagsResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getTopTags', params),
    });
  }

  public static getTopTracks(
    params: TopTracksParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TopTracksResponse>> {
    return axios.get<TopTracksResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getTopTracks', params),
    });
  }

  public static getWeeklyAlbumChart(
    params: WeeklyAlbumChartParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<WeeklyAlbumChartResponse>> {
    return axios.get<WeeklyAlbumChartResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getWeeklyAlbumChart', params),
    });
  }

  public static getWeeklyArtistChart(
    params: WeeklyArtistChartParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<WeeklyArtistChartResponse>> {
    return axios.get<WeeklyArtistChartResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getWeeklyArtistChart', params),
    });
  }

  public static getWeeklyChartList(
    params: WeeklyChartListParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<WeeklyChartListResponse>> {
    return axios.get<WeeklyChartListResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getWeeklyChartList', params),
    });
  }

  public static getWeeklyTrackChart(
    params: WeeklyTrackChartParams,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<WeeklyTrackChartResponse>> {
    return axios.get<WeeklyTrackChartResponse>(this.url, {
      ...config,
      params: ParamsUtils.setParams('user.getWeeklyTrackChart', params),
    });
  }
}
